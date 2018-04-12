import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ChartGrid from './ChartGrid.jsx';


const contentNode = document.getElementById('contents');
ReactDOM.render(<ChartGrid />, contentNode);




// HMR from webpack-dev
if (module.hot) {
	module.hot.accept();
}