package main

import (
	"time"
)

// Data Trasfer Object: for http.Post
type DTO struct {
	Ticks []Data `json:"ticks"`
	From  Data   `json:"from"`
	To    Data   `json:"to"`
}

// Simulate ... fetch data from shared channel
//     calculation of arbitrage
func TickSimulate(tk *time.Ticker, in <-chan Data, out chan<- DTO) {
	defer tk.Stop()
	rcvQ := []Data{}
	for {
		select {
		case <-tk.C: // calculating at sync point
			// fmt.Printf("%s, Simulator search queue : %v \n", t.Format("15:04:05 EST"), rcvQ)
			from, to := SearchMinMax(rcvQ) // ;fmt.Printf("%v , %v \n", from, to)
			if len(rcvQ) > 0 {
				postData := DTO{Ticks: rcvQ, From: from, To: to}
				out <- postData
				rcvQ = []Data{}
			}
		case d := <-in: // fetch channel data at interval
			rcvQ = append(rcvQ, d)
		}
	}
}

func SearchMinMax(rcvQ []Data) (from Data, to Data) {
	var minAsk, maxBid Data
	for i, d := range rcvQ {
		if i == 0 {
			minAsk = d
			maxBid = d
		} else {
			if d.Ask < minAsk.Ask {
				minAsk = d
			}
			if d.Bid > maxBid.Bid {
				maxBid = d
			}
		}
	}

	if minAsk.Ask < maxBid.Bid {
		//fmt.Printf("simulate profit : %f, between %v and %v\n", maxBid.Bid-minAsk.Ask, minAsk, maxBid)
		from = minAsk
		to = maxBid
	} else {
		from = Data{}
		to = Data{}
	}
	return
}
