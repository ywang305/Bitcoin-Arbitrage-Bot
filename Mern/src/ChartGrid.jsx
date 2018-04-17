import React from 'react';
import PriceChart from './Chart.jsx';
import { Grid, Row, Col } from 'react-bootstrap';

  


export default class CharGrid extends React.Component {
	constructor(props) {
		super(props);
		this.state = { Ticks:[],  };
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => {
				this.loadData('/api/btc-tick');
				this.loadData('/api/btc-trade');
			}
			,1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	loadData(uri) {
		fetch(uri)
			.then( res => {
				if(res.ok) {
					res.json().then( data => {
						console.log(data);
						this.update(data);
					});
				}
			}).catch( err=>{
				console.log(`Error in feching data from server: ${err}`);
			});
	}

	update(data) {
		if(data.type && data.type=='tick') {
			this.setState({Ticks: data.ticks});
		}
	}
	

	render() {
		return (
			<Grid>
				<Row> 
					<Col> <PriceChart title='Coinbase' ticks={this.state.Ticks}/> </Col>
					<Col> <PriceChart title='Gemini' ticks={this.state.Ticks}/> </Col> 
					<Col> <PriceChart title='Itbit' ticks={this.state.Ticks}/> </Col>   
				</Row>
				<Row> 
					<Col> <PriceChart title='Btcc' ticks={this.state.Ticks}/> </Col>
					<Col> <PriceChart title='Bitstamp' ticks={this.state.Ticks}/> </Col> 
					<Col> <PriceChart title='Bitfinex' ticks={this.state.Ticks}/> </Col>   
				</Row>
				<Row> 
					<Col> <PriceChart title='Cex' ticks={this.state.Ticks}/> </Col>
					<Col> <PriceChart title='Bitbay' ticks={this.state.Ticks}/> </Col> 
					<Col> <PriceChart title='Gdax' ticks={this.state.Ticks}/> </Col>   
				</Row>
			</Grid>	
		);
	}
}

/* 	<PriceChart price={this.state.Gdax} />
	<hr/>
	<div> ideal: {this.state.Trade.ideal}    delay :  {this.state.Trade.delay} </div> 
*/

/*
	update(data) {
		if(data.type && data.type=='tick') {
			let bid, ask;
			for( let d of data.ticks) {
				if(d.title=='Coinbase') {
					bid = d.bid;
					ask = d.ask;
					break;
				}
			}
            
			let cloneTrade = Object.assign({}, this.state.Trade);
			cloneTrade[data.id] = data.to.bid - data.from.ask;
			this.setState({Gdax:{time:data.id.substr(-9, 5), bid:bid, ask:ask }, 
				Trade: cloneTrade
			});
		}
		else if(data.type && data.type=='trade' && this.state.Trade[data.id]) {
			let realDiff = data.to.bid - data.from.ask;
			let idealDiff = this.state.Trade[data.id];
			let newIdeal = this.state.Trade.ideal + idealDiff;
			let newDelay = this.state.Trade.delay + realDiff;
            
			let clone = Object.assign({}, this.state.Trade);
			delete clone[data.id];
			clone.ideal = newIdeal;
			clone.delay = newDelay;

			this.setState({Gdax: this.state.Gdax,  Trade: clone});
		}
	}
	*/