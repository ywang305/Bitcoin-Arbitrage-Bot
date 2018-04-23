import React from 'react';
import { SplitButton, OverlayTrigger, Popover, Glyphicon, Button, Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';

const titles = ['Coinbase', 'Gemini', 'Itbit',
	'Btcc', 'Bitstamp', 'Bitfinex',
	'Cex', 'Bitbay', 'Gdax' ];
const about = {
	'Coinbase':'https://api.coinbase.com/v2/prices/',
	'Gemini': 'https://api.gemini.com/v1/pubticker/btcusd',
	'Itbit': 'https://api.itbit.com/v1/markets/XBTUSD/ticker',
	'Btcc': 'https://spotusd-data.btcc.com/data/pro/ticker?symbol=BTCUSD',
	'Bitstamp': 'https://www.bitstamp.net/api/v2/ticker/', 
	'Bitfinex': 'https://api.bitfinex.com/v2/ticker/', 
	'Cex': 'https://cex.io/api/ticker/BTC/USD', 
	'Bitbay': 'https://bitbay.net/API/Public/BTC/USD/ticker.json', 
	'Gdax': 'https://api.gdax.com/products/BTC-USD/ticker',
};

const popWrapper = (
	<SplitButton bsSize="xsmall" bsStyle="info" title=" About " key="Help" id='split-button-basic'>
		{titles.map(title => 
			<OverlayTrigger trigger={['focus']} placement="left" overlay={
				<Popover id="popover-positioned-left" title={title + ' REST-API'}>
					Hello from {title} <br/> <strong> {about[title]} </strong>
				</Popover>
			}>
				<MenuItem eventKey={title}>{title}</MenuItem>
			</OverlayTrigger>
		)}
	</SplitButton>
);



const Header = (props)=>{
	
	return (
		<Navbar inverse collapseOnSelect fixedTop>
			<Navbar.Header>
				<Navbar.Brand><a href='#'>CryptoWatch</a></Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav>
					<NavItem>
						<Button bsSize="xsmall" bsStyle="primary" onClick={props.play}>
							<Glyphicon glyph="play" /> start
						</Button> 
					</NavItem>
					<NavItem>
						<Button bsSize="xsmall" bsStyle="success" onClick={props.pause}>
							<Glyphicon glyph="pause" /> pause
						</Button>
					</NavItem>
					<NavItem>
						<Button bsSize="xsmall" bsStyle="danger" onClick={props.toggleGauge}>
							<Glyphicon glyph="dashboard" /> gauge
						</Button>
					</NavItem>
				</Nav>
				<Nav pullRight>
					<NavItem>
						{popWrapper}
					</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>);
};
    
export default Header;