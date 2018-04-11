import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';



export default class PriceChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { prices: [
			{time:'12:01', Provider1: 12, Provider2: 19, },
			{time:'12:02', Provider1: 18, Provider2: 22,},
			{time:'12:03', Provider1: 7,  Provider2: 45,},
		]};
	}
	render() {
		return (
			<LineChart width={400} height={400} data={this.state.prices}>
				<XAxis dataKey="time"/>
				<YAxis />
				<Tooltip />
				<Line type="monotone" dataKey="Provider1" stroke="#8884d8" />
				<Line type="monotone" dataKey="Provider2" stroke="#82ca9d" />
			</LineChart>
		);
	}
}

