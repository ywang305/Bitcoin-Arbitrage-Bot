package main

import (
	"time"
)

// Data Trasfer Object: for http.Post
type DTO struct {
	Type  string `json:"type"`
	ID    string `json:"id"`
	Ticks []Data `json:"ticks"`
	From  Data   `json:"from"`
	To    Data   `json:"to"`
}

// Transaction with delay
func SimTransact(id string, from Data, to Data, out chan<- DTO) {
	delay := time.Duration(60)

	time.Sleep(delay * time.Second)
	fromEnt := tasks[from.Title]
	toEnt := tasks[to.Title]
	if minAsker, err1 := fromEnt.run(fromEnt.symbol); err1 == nil {
		if maxBider, err2 := toEnt.run(toEnt.symbol); err2 == nil {
			postData := DTO{
				Type:  "trade",
				ID:    id,
				Ticks: nil,
				From:  minAsker, // - minAsker.Ask
				To:    maxBider, // + maxBider.Bid
			}
			out <- postData
		}
	}
}

// Simulate ... fetch data from shared channel
//     calculation of arbitrage
func TickSimulate(tk *time.Ticker, in <-chan Data, out chan<- DTO) {
	defer tk.Stop()
	rcvQ := []Data{}
	for {
		select {
		case tic := <-tk.C: // calculating at sync point
			// fmt.Printf("%s, Simulator search queue : %v \n", tic.Format("15:04:05 EST"), rcvQ)
			from, to := SearchMinMax(rcvQ) // ;fmt.Printf("%v , %v \n", from, to)

			id := tic.Format("Jan 2 2006 15:04:05 EST")
			// buy & sell
			if from.Title != "" && to.Title != "" {
				go SimTransact(id, from, to, out)
			}

			// send to postCh channel
			if len(rcvQ) > 0 {
				postData := DTO{Type: "tick", ID: id, Ticks: rcvQ, From: from, To: to}
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
