import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import 'whatwg-fetch';



export default class PriceChart extends React.Component {
	constructor(props) {
		super(props);
		/*
		this.state = { prices: [
			{time:'12:01', Provider1: 12, Provider2: 19, },
			{time:'12:02', Provider1: 18, Provider2: 22,},
			{time:'12:03', Provider1: 7,  Provider2: 45,},
		]};*/
		this.state = { prices: []};
		this.docs = [];  // queue
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.loadData()
			,1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	loadData() {
		fetch('/api/btc')
			.then( res => {
				if(res.ok) {
					res.json().then( data => {
						alert(JSON.stringify(data.id));
					});
				}
			}).catch( err=>{
				alert(`Error in feching data from server: ${err}`);
			});
	}


	render() {
		return (
			<LineChart width={800} height={400} data={this.state.prices}>
				<XAxis dataKey="time"/>
				<YAxis />
				<Tooltip />
				<Line type="monotone" dataKey="bid" stroke="#8884d8" />
				<Line type="monotone" dataKey="ask" stroke="#82ca9d" />
			</LineChart>
		);
	}
}

