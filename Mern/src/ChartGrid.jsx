import React from 'react';
import PriceChart from './Chart.jsx';
import { Grid, Row, Col, Button,  ButtonToolbar } from 'react-bootstrap';

  


export default class CharGrid extends React.Component {
	constructor(props) {
		super(props);
		this.state = { Ticks:[],  };
		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);
	}

	/*
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
	*/

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
						this.update(data);
					});
				}
			}).catch( err=>{
				console.log(`Error in feching data from server: ${err}`);
			});
	}

	update(data) {
		if(data.type && data.type=='tick') {
			this.setState({Ticks: data.ticks});
		}
	}
	

	render() {
		return (
			<Grid>
				<Row>
					<ButtonToolbar>
						<Button bsSize='small' bsStyle="primary" onClick={this.play}>start</Button>
						<Button bsSize='small' bsStyle="warning" onClick={this.pause}>pause</Button>
					</ButtonToolbar>
				</Row>
				<Row> 
					<Col xs={12} sm={6} md={4}> <PriceChart title='Coinbase' ticks={this.state.Ticks}/> </Col>
					<Col xs={12} sm={6} md={4}> <PriceChart title='Gemini' ticks={this.state.Ticks}/> </Col> 
					<Col xs={12} sm={6} md={4}> <PriceChart title='Itbit' ticks={this.state.Ticks}/> </Col>    

					<Col xs={12} sm={6} md={4}> <PriceChart title='Btcc' ticks={this.state.Ticks}/> </Col>
					<Col xs={12} sm={6} md={4}> <PriceChart title='Bitstamp' ticks={this.state.Ticks}/> </Col> 
					<Col xs={12} sm={6} md={4}> <PriceChart title='Bitfinex' ticks={this.state.Ticks}/> </Col>
    
					<Col xs={12} sm={6} md={4}> <PriceChart title='Cex' ticks={this.state.Ticks}/> </Col>
					<Col xs={12} sm={6} md={4}> <PriceChart title='Bitbay' ticks={this.state.Ticks}/> </Col> 
					<Col xs={12} sm={6} md={4}> <PriceChart title='Gdax' ticks={this.state.Ticks}/> </Col>   
				</Row>
			</Grid>	
		);
	}
}
