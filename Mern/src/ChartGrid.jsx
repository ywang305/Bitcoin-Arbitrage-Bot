import React from 'react';
import PriceChart from './Chart.jsx';
import { Grid, Row, Col } from 'react-bootstrap';

  
const ChartGrid = (props) => (
	<Grid>
		<Row> 
			<Col xs={12} sm={6} md={4}> <PriceChart title='Coinbase' ticks={props.ticks}/> </Col>
			<Col xs={12} sm={6} md={4}> <PriceChart title='Gemini' ticks={props.ticks}/> </Col> 
			<Col xs={12} sm={6} md={4}> <PriceChart title='Itbit' ticks={props.ticks}/> </Col>    

			<Col xs={12} sm={6} md={4}> <PriceChart title='Btcc' ticks={props.ticks}/> </Col>
			<Col xs={12} sm={6} md={4}> <PriceChart title='Bitstamp' ticks={props.ticks}/> </Col> 
			<Col xs={12} sm={6} md={4}> <PriceChart title='Bitfinex' ticks={props.ticks}/> </Col>

			<Col xs={12} sm={6} md={4}> <PriceChart title='Cex' ticks={props.ticks}/> </Col>
			<Col xs={12} sm={6} md={4}> <PriceChart title='Bitbay' ticks={props.ticks}/> </Col> 
			<Col xs={12} sm={6} md={4}> <PriceChart title='Gdax' ticks={props.ticks}/> </Col>   
		</Row>
	</Grid>
);


export default ChartGrid;