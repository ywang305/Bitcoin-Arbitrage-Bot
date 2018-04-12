package main

import (
	"fmt"
	"testing"
)

/*
func TestFormat(t *testing.T) {
	tic := time.Now()
	t.Logf("time : %s", tic.Format("Jan 2 2006 15:04:05 EST"))
}
*/

/*
func TestTick(t *testing.T) {
	// funcs
	rests := []struct {
		API    func(string) (Data, error)
		Symbol string
	}{
		{GetBitfinex, "tBTCUSD"},
		{GetCoinbase, "BTC-USD"},
		{GetOkcoin, "btc_usd"},
		{GetBitstamp, "btcusd"},
		{GetGdax, "BTC-USD"},
		{GetGemini, "btcusd"},
		{GetItbit, "XBTUSD"},
		{GetCex, "BTC/USD"},
		{GetBitbay, "BTC/USD"},
		{GetBtcc, "BTCUSD"},
	}

	var data Data
	var err error
	for i, rest := range rests {
		if data, err = rest.API(rest.Symbol); err != nil {
			t.Errorf(err.Error())
		} else {
			t.Logf("rcvd_%d = %v", i, data)
		}
	}
}
*/

/*
func TestChannel(t *testing.T) {
	P := fmt.Println

	ch := make(chan rune)

	go func(tk *time.Ticker) {
		var d rune
		d = 'a'
		for tic := range tk.C {
			// Rest get 'a'
			P(tic, " fetch REST ")
			select {
			case ch <- d:
				P("ID-1, send ch<- ", d)
				d++
			}
		}
	}(time.NewTicker(2 * time.Second))

	go func(tk *time.Ticker) {
		var d rune
		d = '1'
		for tic := range tk.C {
			P(tic, " fetch REST ")
			select {
			case ch <- d:
				P("ID-2, send ch<- ", d)
				d++
			}
		}
	}(time.NewTicker(2 * time.Second))

	go func(tk *time.Ticker) {
		rcvs := []rune{}
		for {
			select {
			case t := <-tk.C:
				P(t, string(rcvs), "  (next empty rcvs)")
				rcvs = []rune{}
			case d := <-ch:
				rcvs = append(rcvs, d)
				P("d:= <-ch  ", string(rcvs))
			}
		}
	}(time.NewTicker(2 * time.Second))

	for i := 0; i < 10; i++ {
		time.Sleep(2 * time.Second)
	}
}
*/

func Test_UnbufferedChannel(t *testing.T) {
	log := fmt.Println
	ch := make(chan string)

	go func() {
		msg := <-ch
		log(" rcv : ", msg)
	}()

	ch <- "hello"
	log(" sender : hello")
	//ch <- "world" // stucked here since no one fetch this chan
	//log("sender : world ")
}

func Test_BufferedChannel(t *testing.T) {
	log := fmt.Println
	ch := make(chan string, 1)

	go func() {
		msg := <-ch
		log(" rcv : ", msg)
	}()

	ch <- "hello"
	log(" sender : hello, len(ch) = ", len(ch))
	ch <- "world"
	log("sender : world, len(ch) = ", len(ch))
	//ch <- "bye" // stucked since buffer is full
	//log("sender : bye, len(ch) = ", len(ch))
}

func Test_SelectChannel(t *testing.T) {
	logf := fmt.Printf
	ch := make(chan int, 1)

	for i := 0; i < 10; i++ {
		select {
		case x := <-ch:
			logf("rcv : %d\n", x)
		case ch <- i:
			logf("snt: %d", i)
		}
	}
}
