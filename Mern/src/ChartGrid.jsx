import React from 'react';
import PriceChart from './Chart.jsx';

export default class CharGrid extends React.Component {
	constructor(props) {
		super(props);
		this.state = { Gdax:{},  Trade:{ideal:0.0, delay:0.0}, };
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
						//console.log(data);
						this.update(data);
					});
				}
			}).catch( err=>{
				console.log(`Error in feching data from server: ${err}`);
			});
	}

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
            
			let clone = Object.assign({}, this.state.Trade);
			clone[data.id] = data.to.bid - data.from.ask;
			this.setState({Gdax:{time:data.id.substr(-9, 5), bid:bid, ask:ask }, 
				Trade: clone
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

	render() {
		return (
			<div>
				<PriceChart price={this.state.Gdax} />
				<hr/>
				<div> ideal: {this.state.Trade.ideal}    delay :  {this.state.Trade.delay} </div>
			</div>
		);
	}
}