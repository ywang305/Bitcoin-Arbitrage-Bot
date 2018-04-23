import React from 'react';
import Gauge1 from 'react-svg-gauge';
import Gauge2 from 'react-radial-gauge';

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
	}

	render() {
		return (
			<Gauge2 maximumValue={1000} tickInterval={100}/>
		);
	}
}

