import React from 'react';
import Gauge1 from 'react-svg-gauge';
import Gauge2 from 'react-radial-gauge';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';


export const TickTradeGauge = (props) => {
	let to = props.trans.to;
	let from = props.trans.from;
	let diff = to.bid&&from.ask? Math.round(to.bid-from.ask): 0;
	let text = to.bid&&from.ask? 
		`${Math.round(to.bid)}-${Math.round(from.ask)}` : '';
	return (
		<Gauge1 min={-1500} max={1500} value={diff} width={200} height={200} 
			label={ text } />
	);
};


export class AccumTradeGauge extends React.Component {
	constructor(props) {
		super(props);
		this.state={ sum: 0, titleList:[] };
	}
	componentWillReceiveProps(newProps) {
		let to = newProps.trans.to;
		let from = newProps.trans.from;
		if( to && to.title && from && from.title ) {
			let diff = to.bid-from.ask;
			let sum = this.state.sum + diff;
			let list = this.state.titleList.slice();
			list.push(`${from.title} -> ${to.title} : $${diff}`);
			this.setState({sum: sum, titleList: list});
		}
	}

	render() {
		const popOver = (
			<Popover id="popover-positioned-bottom" title="trade list">
				{this.state.titleList.map(t=><div>{t}</div>)}
			</Popover>
		);
		return (
			<div>
				<Gauge2 currentValue={Math.round(this.state.sum)} maximumValue={Math.round(this.state.sum*2)} 
					size={200} dialWidth={18} dialColor="#FCFFAB" tickWidth={4} tickColor="#2980B9"
					needleSharp	needleBaseColor="#E74C3C" needleColor="#2980B9" needleBaseSize={10} needleWidth={7}
					progressColor="#3498DB" progressWidth={10} />
				<OverlayTrigger trigger="focus" placement="bottom" overlay={popOver}>
					<Button bsSize="xsmall" bsStyle="info">Trade List</Button>
				</OverlayTrigger>
			</div>
		);
	}
}

