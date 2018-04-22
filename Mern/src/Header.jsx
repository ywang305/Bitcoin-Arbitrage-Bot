import React from 'react';
import { SplitButton, OverlayTrigger, Popover, Glyphicon, Button, Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';

const myMenus = ['Coinbase', 'Gemini', 'Itbit',
	'Btcc', 'Bitstamp', 'Bitfinex',
	'Cex', 'Bitbay', 'Gdax' ].map(t=><MenuItem eventKey={t}>{t}</MenuItem>);


const PopWrapper = (props)=>{
	const popoverLeft = (
		<Popover id="popover-positioned-left" title="Popover left">
		</Popover>
	);
	return (
		<OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
			{props.navMenu}
		</OverlayTrigger>
	);
};

const Header = (props)=>(
	<Navbar inverse collapseOnSelect fixedTop>
		<Navbar.Header>
			<Navbar.Brand><a href='#'>Bitcoin-Arbitrage Charts</a></Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem>
					<Button bsSize="xsmall" bsStyle="primary" onClick={props.play}>
						<Glyphicon glyph="play" />
					</Button> 
				</NavItem>
				<NavItem>
					<Button bsSize="xsmall" bsStyle="success" onClick={props.pause}>
						<Glyphicon glyph="pause" />
					</Button>
				</NavItem>
			</Nav>
			<Nav pullRight>
				<NavItem>
					<SplitButton bsSize="xsmall" bsStyle="info" title="Exchanges" key="Exchanges" id='split-button-basic'>
						{myMenus}
					</SplitButton>
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>);
    
export default Header;