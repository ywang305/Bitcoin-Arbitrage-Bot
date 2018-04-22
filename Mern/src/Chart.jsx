import React from 'react';
import { CartesianGrid, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import ModalChart from './Modal.jsx';


export default class PriceChart extends React.Component {
	constructor(props) {
		super(props);
		/*
		this.state = { prices: [
			{time:'12:01', bid: 12, ask: 19, },
			{time:'12:02', bid: 18, ask: 22,},
			{time:'12:03', bid: 7,  ask: 45,},
		]};*/
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.state = { prices: [], yAxisDomain:[], isModal: false};
	}

	componentWillReceiveProps(newProps) {
		let found = newProps.ticks.find( tk => tk.title == newProps.title );

		if(found) {
			this.update({time: newProps.id, bid: found.bid, ask: found.ask});
		}
	}

	update(price) {
		let newPrices = this.state.prices.slice();
		newPrices.push(price);
		let bid = price.bid;
		let ask = price.ask;
		let yDomain = this.state.yAxisDomain.slice();
		let gap = (ask-bid)/2;
		if(yDomain.length<2) {
			yDomain = [(bid-gap), (ask+gap)];
		} else {
			yDomain[0] = bid-gap < yDomain[0]? (bid-gap) : yDomain[0];
			yDomain[1] = ask+gap > yDomain[1]? (ask+gap) : yDomain[1];
		}
		this.setState({prices: newPrices, yAxisDomain: yDomain, isModal:this.state.isModal});	
	}

	openModal() {
		this.setState({
			prices: this.state.prices,
			yAxisDomain: this.state.yAxisDomain,
			isModal: true 
		});
	}
	closeModal() {
		this.setState({
			prices: this.state.prices,
			yAxisDomain: this.state.yAxisDomain,
			isModal: false 
		});
	}

	render() {
		const pc = (<ResponsiveContainer  minHeight={150} height ='25%' >
			<LineChart data={this.state.prices} margin={{top:2, right:2, left:15, bottom:2}} onClick={this.openModal}>
				<XAxis dataKey="time"/>
				<YAxis domain={[ Math.floor(this.state.yAxisDomain[0]*10)/10, Math.ceil(this.state.yAxisDomain[1]*10)/10 ]}/>
				<CartesianGrid strokeDasharray="3 3"/>
				<Tooltip />
				<Line type="monotone" dataKey="bid" stroke="#8884d8" />
				<Line type="monotone" dataKey="ask" stroke="#82ca9d" />
			</LineChart>
		</ResponsiveContainer>);

		if(this.state.isModal) {
			return (
				<div>
					{pc}
					<ModalChart title={this.props.title} priceChart={pc} closeMe={this.closeModal}/>
				</div>
			);
		}
		return (
			pc
		);
	}
}

