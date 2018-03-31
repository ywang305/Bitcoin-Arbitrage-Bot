package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
)

// Data : DTO
type Data struct {
	Title  string  `json:"title"`
	Symbol string  `json:"symbol"`
	Bid    float64 `json:"bid"`
	Ask    float64 `json:"ask"`
}

// GetBitfinex : return number array, not JSON
func GetBitfinex(symbol string) (Data, error) {
	// URIbitfinex  Base URI
	const URIbitfinex = "https://api.bitfinex.com/v2/ticker/"
	resp, err := http.Get(URIbitfinex + symbol)
	defer resp.Body.Close()

	if err != nil {
		return Data{}, err
	}

	if resp.StatusCode != http.StatusOK {
		return Data{}, fmt.Errorf("   bitfinex httpStatus : %d", resp.StatusCode)
	}

	var nums []float64
	if err := json.NewDecoder(resp.Body).Decode(&nums); err != nil {
		//log.Println(err)
		return Data{}, err
	}
	return Data{Title: "Bitfinex", Symbol: symbol, Bid: nums[0], Ask: nums[2]}, nil
}

// GetCoinbase :
func GetCoinbase(symbol string) (Data, error) {
	// URIcoinbase Base URI
	const URIcoinbase = "https://api.coinbase.com/v2/prices/"
	// recv data from REST api
	type Record struct {
		Data struct {
			Base     string `json:"base"`
			Currency string `json:"currency"`
			Amount   string `json:"amount"`
		} `json:"data"`
	}
	respBuy, err1 := http.Get(URIcoinbase + symbol + "/buy")
	respSell, err2 := http.Get(URIcoinbase + symbol + "/sell")
	defer func() {
		respBuy.Body.Close()
		respSell.Body.Close()
	}()

	if err1 != nil {
		return Data{}, err1
	}
	if err2 != nil {
		return Data{}, err2
	}

	if respBuy.StatusCode != http.StatusOK {
		return Data{}, fmt.Errorf("  coinbase http.Status : %d", respBuy.StatusCode)
	}
	if respSell.StatusCode != http.StatusOK {
		return Data{}, fmt.Errorf("  coinbase http.Status: %d", respSell.StatusCode)
	}

	var recBid, recAsk Record
	if err1 := json.NewDecoder(respBuy.Body).Decode(&recBid); err1 != nil {
		return Data{}, err1
	}
	if err2 := json.NewDecoder(respSell.Body).Decode(&recAsk); err2 != nil {
		return Data{}, err2
	}
	bidPrice, _ := strconv.ParseFloat(recBid.Data.Amount, 64)
	askPrice, _ := strconv.ParseFloat(recAsk.Data.Amount, 64)
	// coinbase bug?
	if bidPrice > askPrice {
		bidPrice, askPrice = askPrice, bidPrice
	}

	return Data{
		Title:  "Coinbase",
		Symbol: symbol,
		Bid:    bidPrice,
		Ask:    askPrice,
	}, nil
}

// Okcoin ...
func GetOkcoin(symbol string) (Data, error) {
	const URI = "https://www.okcoin.com/api/v1/ticker.do?symbol="
	resp, err := http.Get(URI + symbol)
	defer resp.Body.Close()
	if err != nil {
		return Data{}, err
	}
	if resp.StatusCode != http.StatusOK {
		return Data{}, fmt.Errorf("Okcoin httpStatus : %d", resp.StatusCode)
	}
	type JSON struct {
		Ticker struct {
			Buy  string `json:"buy"`
			Sell string `json:"sell"`
		} `json:"ticker"`
	}

	var rcv JSON
	if err := json.NewDecoder(resp.Body).Decode(&rcv); err != nil {
		//log.Println(err)
		return Data{}, err
	}
	bid, _ := strconv.ParseFloat(rcv.Ticker.Buy, 64)
	ask, _ := strconv.ParseFloat(rcv.Ticker.Sell, 64)
	return Data{Title: "Okcoin", Symbol: symbol, Bid: bid, Ask: ask}, nil
}

func GetBitstamp(symbol string) (Data, error) {
	const URI = "https://www.bitstamp.net/api/v2/ticker/"
	resp, err := http.Get(URI + symbol)
	defer resp.Body.Close()
	if err != nil {
		return Data{}, err
	}
	if resp.StatusCode != http.StatusOK {
		return Data{}, fmt.Errorf("Okcoin httpStatus : %d", resp.StatusCode)
	}

	var rcv struct {
		Bid string `json:"bid"`
		Ask string `json:"ask"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&rcv); err != nil {
		return Data{}, err
	}
	bid, _ := strconv.ParseFloat(rcv.Bid, 64)
	ask, _ := strconv.ParseFloat(rcv.Ask, 64)
	return Data{Title: "Bitstamp", Symbol: symbol, Bid: bid, Ask: ask}, nil
}

// https://api.gdax.com/products/BTC-USD/ticker
func GetGdax(symbol string) (Data, error) {
	const URI = "https://api.gdax.com/products/"
	resp, err := http.Get(URI + symbol + "/ticker")
	defer resp.Body.Close()
	if err != nil {
		return Data{}, err
	}
	if resp.StatusCode != http.StatusOK {
		return Data{}, fmt.Errorf("GDAX httpStatus : %d", resp.StatusCode)
	}

	var rcv struct {
		Bid string `json:"bid"`
		Ask string `json:"ask"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&rcv); err != nil {
		return Data{}, err
	}
	bid, _ := strconv.ParseFloat(rcv.Bid, 64)
	ask, _ := strconv.ParseFloat(rcv.Ask, 64)
	return Data{Title: "GDAX", Symbol: symbol, Bid: bid, Ask: ask}, nil
}

// "https://api.gemini.com/v1/pubticker/btcusd"
func GetGemini(symbol string) (Data, error) {
	const URI = "https://api.gemini.com/v1/pubticker/"
	resp, err := http.Get(URI + symbol)
	defer resp.Body.Close()
	if err != nil {
		return Data{}, err
	}
	if resp.StatusCode != http.StatusOK {
		return Data{}, fmt.Errorf("Gemini httpStatus : %d", resp.StatusCode)
	}

	var rcv struct {
		Bid string `json:"bid"`
		Ask string `json:"ask"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&rcv); err != nil {
		return Data{}, err
	}
	bid, _ := strconv.ParseFloat(rcv.Bid, 64)
	ask, _ := strconv.ParseFloat(rcv.Ask, 64)
	return Data{Title: "Gemini", Symbol: symbol, Bid: bid, Ask: ask}, nil
}

// https://api.itbit.com/v1/markets/XBTUSD/ticker
func GetItbit(symbol string) (Data, error) {
	const URI = "https://api.itbit.com/v1/markets/"
	resp, err := http.Get(URI + symbol + "/ticker")
	defer resp.Body.Close()
	if err != nil {
		return Data{}, err
	}
	if resp.StatusCode != http.StatusOK {
		return Data{}, fmt.Errorf("itBit httpStatus : %d", resp.StatusCode)
	}

	var rcv struct {
		Bid string `json:"bid"`
		Ask string `json:"ask"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&rcv); err != nil {
		return Data{}, err
	}
	bid, _ := strconv.ParseFloat(rcv.Bid, 64)
	ask, _ := strconv.ParseFloat(rcv.Ask, 64)
	return Data{Title: "itBit", Symbol: symbol, Bid: bid, Ask: ask}, nil
}

// https://cex.io/api/ticker/BTC/USD
func GetCex(symbol string) (Data, error) {
	const URI = "https://cex.io/api/ticker/"
	resp, err := http.Get(URI + symbol)
	defer resp.Body.Close()
	if err != nil {
		return Data{}, err
	}
	if resp.StatusCode != http.StatusOK {
		return Data{}, fmt.Errorf("Cex httpStatus : %d", resp.StatusCode)
	}

	var rcv Data
	if err := json.NewDecoder(resp.Body).Decode(&rcv); err != nil {
		return Data{}, err
	}
	rcv.Title = "Cex"
	rcv.Symbol = symbol
	return rcv, nil
}

// https://bitbay.net/API/Public/BTC/USD/ticker.json
func GetBitbay(symbol string) (Data, error) {
	const URI = "https://bitbay.net/API/Public/"
	resp, err := http.Get(URI + symbol + "/ticker.json")
	defer resp.Body.Close()
	if err != nil {
		return Data{}, err
	}
	if resp.StatusCode != http.StatusOK {
		return Data{}, fmt.Errorf("Bitbay httpStatus : %d", resp.StatusCode)
	}

	var rcv Data
	if err := json.NewDecoder(resp.Body).Decode(&rcv); err != nil {
		return Data{}, err
	}
	rcv.Title = "Bitbay"
	rcv.Symbol = symbol
	return rcv, nil
}

// https://spotusd-data.btcc.com/data/pro/ticker?symbol=BTCUSD
func GetBtcc(symbol string) (Data, error) {
	const URI = "https://spotusd-data.btcc.com/data/pro/ticker?symbol="
	resp, err := http.Get(URI + symbol)
	defer resp.Body.Close()
	if err != nil {
		return Data{}, err
	}
	if resp.StatusCode != http.StatusOK {
		return Data{}, fmt.Errorf("BTCC httpStatus : %d", resp.StatusCode)
	}
	var rcv struct {
		Ticker struct {
			Bid float64 `json:"BidPrice"`
			Ask float64 `json:"AskPrice"`
		} `json:"ticker"`
	}

	if err := json.NewDecoder(resp.Body).Decode(&rcv); err != nil {
		return Data{}, err
	}
	return Data{Title: "BTCC", Symbol: symbol, Bid: rcv.Ticker.Bid, Ask: rcv.Ticker.Ask}, nil
}
