import React from 'react';
import PriceChart from './Chart.jsx';
import {Table, Grid, Row, Col } from 'react-bootstrap';

const gStyle = {
	'margin-top': '50px'
};

const ChartGrid = (props) => {
	const titles = ['Coinbase', 'Gemini', 'Itbit',
		'Btcc', 'Bitstamp', 'Bitfinex',
		'Cex', 'Bitbay', 'Gdax' ];

	const charts =	titles.map(t => (
		<Col xs={12} sm={6} md={4}> 
			<Table condensed hover striped>
				<thead>
					<tr><th>{t}</th></tr>
				</thead>
				<tbody>
					<tr><td>
						<PriceChart title={t} ticks={props.ticks} /> 
					</td></tr>
				</tbody>
			</Table>
		</Col>
	));

	return (
		<Grid style={gStyle}>
			<Row> </Row>
			<Row>{charts}</Row>
		</Grid>
	);
};



export default ChartGrid;