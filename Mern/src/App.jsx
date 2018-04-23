import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import Header from './Header.jsx';
import ChartGrid from './ChartGrid.jsx';
import GaugeGrid from './GaugeGrid.jsx';


class AppStart extends React.Component {
	constructor(props) {
		super(props);

		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);
		this.toggleGauge = this.toggleGauge.bind(this);
		this.state = { inData:{ id:'', ticks:[] }, isShowGauge: false};
	}

	toggleGauge() {
		this.setState({ inData:{ id:'', ticks:[]},  isShowGauge: !this.state.isShowGauge, });
	}


	play() {
		if(this.timerID) return;
		// use lambda to bind "this"
		let poll = ()=>{
			this.loadData('/api/btc-tick');
			this.loadData('/api/btc-trade');
			this.timerID = setTimeout(poll, 1000);
		};
		this.timerID = setTimeout( poll , 1000 );
	}

	pause() {
		if(this.timerID) {
			clearTimeout(this.timerID);
			this.timerID = undefined;
		}
	}

	loadData(uri) {
		fetch(uri)
			.then( res => {
				if(res.ok) {
					res.json().then( data => {
						//console.log(data);
						this.setState({ inData: data,  isShowGauge:this.state.isShowGauge });
					});
				}
			}).catch( err=>{
				console.log(`Error in feching data from server: ${err}`);
			});
	}

	

	render() {
		return (
			<div> 
				<Header play={this.play} pause={this.pause} toggleGauge={this.toggleGauge}/>
				<GaugeGrid isShow={this.state.isShowGauge} inData={this.state.inData} />
				<ChartGrid id={this.state.inData.id} ticks={this.state.inData.ticks} />
			</div>
		);
	}
}

const contentNode = document.getElementById('contents');
ReactDOM.render(<AppStart />, contentNode);




// HMR from webpack-dev
if (module.hot) {
	module.hot.accept();
}