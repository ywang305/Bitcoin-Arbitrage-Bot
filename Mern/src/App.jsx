import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import PriceChart from './Chart.jsx';


const contentNode = document.getElementById('contents');
ReactDOM.render(<PriceChart />, contentNode);




// HMR from webpack-dev
if (module.hot) {
	module.hot.accept();
}