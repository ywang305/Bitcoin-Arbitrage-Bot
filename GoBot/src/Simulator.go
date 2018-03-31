package main

import (
	"fmt"
	"time"
)

// Simulate ... fetch data from shared channel
//     calculation of arbitrage
func TickSimulate(tk *time.Ticker, ch chan Data) {
	rcvQ := []Data{}
	for {
		select {
		case <-tk.C: // calculating at time point
			// fmt.Printf("%s, Simulator search queue : %v \n", t.Format("15:04:05 EST"), rcvQ)
			SearchMinMax(rcvQ)
			rcvQ = []Data{}
		case d := <-ch: // fetch channel data in interval
			rcvQ = append(rcvQ, d)
		}
	}
}

func SearchMinMax(rcvQ []Data) {
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
		fmt.Printf("simulator capture profit : %f, between %v and %v\n", maxBid.Bid-minAsk.Ask, minAsk, maxBid)
	}
}
