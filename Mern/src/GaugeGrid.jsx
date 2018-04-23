import React from 'react';
import { TickTradeGauge, AccumTradeGauge } from './Gauge.jsx';
import {Table, Grid, Row, Col } from 'react-bootstrap';

const gStyle = {
	'margin-top': '50px'
};




export default class GaugeGrid extends React.Component {
	constructor(props) {
		super(props);
		this.state = { id:'', iTrade:0, dTrade:0 , iTrans:{to:{}, from:{}}, dTrans:{to:{}, from:{}} };
		this.idealMap = new Map();
	}
	componentWillReceiveProps(newProps) {
		let data = newProps.inData;
		if(data.type=='tick' && data.id && data.from && data.to) {
			this.idealMap.set(data.id, {to: data.to, from: data.from});
		}
		else if (data.type=='trade' && data.id && data.from && data.to) {
			if( this.idealMap.has(data.id) ) {
				let iTrans = this.idealMap.get(data.id);
				let dTrans = {to: data.to, from: data.from};
				this.setState({id: data.id, iTrans: iTrans, dTrans: dTrans });
				this.idealMap.delete(data.id);
			}
		}
	}

	render() {
		if(this.props.isShow==false) {
			return (<Grid></Grid>);
		}
		return (
			<Grid style={gStyle}>
				<Row>
					<Col xs={6} sm={6} md={3}> 
						<Table condensed hover bordered>
							<thead>
								<tr><th>tick earning (0-delay)</th></tr>
							</thead>
							<tbody>
								<tr><td>
									{this.state.id} <br />
									{this.state.iTrans.from.title?`${this.state.iTrans.from.title} => ${this.state.iTrans.to.title}`: null} 
								</td></tr>
								<tr><td>
									<TickTradeGauge trans={this.state.iTrans} /> 
								</td></tr>
							</tbody>
						</Table>
					</Col>
					<Col xs={6} sm={6} md={3}> 
						<Table condensed hover bordered>
							<thead>
								<tr><th>tick earning (60s-delay)</th></tr>
							</thead>
							<tbody>
								<tr><td>
									{this.state.id} <br />
									{this.state.dTrans.from.title?`${this.state.dTrans.from.title} => ${this.state.dTrans.to.title}`: null} 
								</td></tr>
								<tr><td>
									<TickTradeGauge trans={this.state.dTrans} /> 
								</td></tr>
							</tbody>
						</Table>
					</Col>
					<Col xs={6} sm={6} md={3}> 
						<Table condensed hover bordered>
							<thead>
								<tr><th>total earning (0-delay)</th></tr>
							</thead>
							<tbody>
								<tr><td>
									{this.state.id} <br/>
								</td></tr>
								<tr><td>
									<AccumTradeGauge trans={this.state.iTrans}/> 
								</td></tr>
							</tbody>
						</Table>
					</Col>
					<Col xs={6} sm={6} md={3}> 
						<Table condensed hover bordered>
							<thead>
								<tr><th>total earning (60s-delay)</th></tr>
							</thead>
							<tbody>
								<tr><td>
									{this.state.id} <br/>
								</td></tr>
								<tr><td>
									<AccumTradeGauge trans={this.state.dTrans}/> 
								</td></tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Grid>
		);
	}
}
