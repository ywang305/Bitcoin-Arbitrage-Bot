package main

import (
	"bufio"
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"
)

// REST api loader:
type REST struct {
	tk     *time.Ticker
	symbol string
	run    func(string) (Data, error)
}

func main() {
	T := time.Duration(6)
	pREST := [...]*REST{
		&REST{time.NewTicker(T * time.Second), "tBTCUSD", GetBitfinex},
		&REST{time.NewTicker(T * time.Second), "BTC-USD", GetCoinbase},
		//&REST{time.NewTicker(T * time.Second), "btc_usd", GetOkcoin},
		&REST{time.NewTicker(T * time.Second), "btcusd", GetBitstamp},
		&REST{time.NewTicker(T * time.Second), "BTC-USD", GetGdax},
		&REST{time.NewTicker(T * time.Second), "btcusd", GetGemini},
		&REST{time.NewTicker(T * time.Second), "XBTUSD", GetItbit},
		&REST{time.NewTicker(T * time.Second), "BTC/USD", GetCex},
		&REST{time.NewTicker(T * time.Second), "BTC/USD", GetBitbay},
		&REST{time.NewTicker(T * time.Second), "BTCUSD", GetBtcc},
	}

	getCh := make(chan Data)      // shared-data channel for exchage REST get
	postCh := make(chan DTO, 100) // post to nodeJs
	defer func() {
		close(getCh)
		close(postCh)
	}()

	for _, pT := range pREST {
		go TickWrapper(pT, getCh)
	}
	go TickSimulate(time.NewTicker(T*time.Second), getCh, postCh)

	go PostToNode(postCh)

	ReadCmd()
}

// PostToNode : send current sync data to nodeJs server
func PostToNode(in <-chan DTO) {
	for dto := range in { // blockQ using buffered channel
		jsonValue, _ := json.Marshal(dto)
		if resp, err := http.Post("http://localhost:3000/api/btc", "application/json", bytes.NewBuffer(jsonValue)); err == nil {
			defer resp.Body.Close()
			fmt.Printf("client rcvd-statusCode : %d \n", resp.StatusCode)
		} else {
			fmt.Println(err)
		}
	}
}

// TickWrapper ... rest api
/*
Bitfinix : rate limit policy 10 to 90 requests per minute
*/
func TickWrapper(pT *REST, ch chan Data) {
	defer pT.tk.Stop()
	for range pT.tk.C {
		if data, err := pT.run(pT.symbol); nil == err {
			//fmt.Printf("%s  (REST)get:  %+v\n", tic.Format("15:04:05 EST"), data)
			select { // non-block
			case ch <- data:
			default:
			}
		} else {
			log.Println(err)
		}
	}
}

// ReadCmd : read a line from Stdin
func ReadCmd() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("\n\n  ===  GO client starts... ===")
	text, _ := reader.ReadString('\n') // delimit
	fmt.Println(text)
}
