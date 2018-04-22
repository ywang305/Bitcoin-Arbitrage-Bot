import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import Header from './Header.jsx';
import ChartGrid from './ChartGrid.jsx';






class AppStart extends React.Component {
	constructor(props) {
		super(props);

		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);
		this.state = { Ticks:[] };
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
						console.log(data);
						if(data.type && data.type=='tick') {
							this.setState({Ticks: data.ticks});
						}
					});
				}
			}).catch( err=>{
				console.log(`Error in feching data from server: ${err}`);
			});
	}

	

	render() {
		return (
			<div> 
				<Header play={this.play} pause={this.pause}/>
				<ChartGrid ticks={this.state.Ticks}/>
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