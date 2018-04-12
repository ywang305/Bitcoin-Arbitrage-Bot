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
		this.state = { prices: [], yAxisDomain:[]};
	}

	componentWillReceiveProps(newProps) {
		this.update(newProps.price);
	}

	update(price) {
		let newPrices = this.state.prices.slice();
		newPrices.push(price);
		let bid = price.bid;
		let ask = price.ask;
		let yDomain = this.state.yAxisDomain.slice();
		let gap = (ask-bid)/2;
		if(yDomain.length<2) {
			yDomain = [bid-gap, ask+gap];
		} else {
			yDomain[0] = bid-gap < yDomain[0]? bid-gap : yDomain[0];
			yDomain[1] = ask+gap > yDomain[1]? ask+gap : yDomain[1];
		}
		this.setState({prices: newPrices, yAxisDomain: yDomain});	
	}

	render() {
		return (
			<LineChart width={800} height={400} data={this.state.prices}>
				<XAxis dataKey="time"/>
				<YAxis domain={this.state.yAxisDomain}/>
				<Tooltip />
				<Line type="monotone" dataKey="bid" stroke="#8884d8" />
				<Line type="monotone" dataKey="ask" stroke="#82ca9d" />
			</LineChart>
		);
	}
}

