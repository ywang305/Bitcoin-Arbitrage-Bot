import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ChartGrid from './ChartGrid.jsx';
import { Glyphicon, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class AppStart extends React.Component {
	constructor(props) {
		super(props);

		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);
		this.state = { Ticks:[],  };
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
			<div> 
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand><a href='#'>Bitcoin-Arbitrage Charts</a></Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem>
								<Button bsStyle="primary" onClick={this.play}>
									<Glyphicon glyph="play" />
								</Button> 
							</NavItem>
							<NavItem>
								<Button bsStyle="success" onClick={this.pause}>
									<Glyphicon glyph="pause" />
								</Button>
							</NavItem>
						</Nav>
						<Nav pullRight>
							<NavDropdown id="user-dropdown" title="Exchanges" noCaret>
								<MenuItem>Coinbase</MenuItem>
								<MenuItem>Bitfinex</MenuItem>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				<ChartGrid ticks={this.state.Ticks} />
			
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