/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/App.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");

var _Header = __webpack_require__(/*! ./Header.jsx */ "./src/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _ChartGrid = __webpack_require__(/*! ./ChartGrid.jsx */ "./src/ChartGrid.jsx");

var _ChartGrid2 = _interopRequireDefault(_ChartGrid);

var _GaugeGrid = __webpack_require__(/*! ./GaugeGrid.jsx */ "./src/GaugeGrid.jsx");

var _GaugeGrid2 = _interopRequireDefault(_GaugeGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppStart = function (_React$Component) {
	_inherits(AppStart, _React$Component);

	function AppStart(props) {
		_classCallCheck(this, AppStart);

		var _this = _possibleConstructorReturn(this, (AppStart.__proto__ || Object.getPrototypeOf(AppStart)).call(this, props));

		_this.play = _this.play.bind(_this);
		_this.pause = _this.pause.bind(_this);
		_this.toggleGauge = _this.toggleGauge.bind(_this);
		_this.state = { inData: { id: '', ticks: [] }, isShowGauge: false };
		return _this;
	}

	_createClass(AppStart, [{
		key: 'toggleGauge',
		value: function toggleGauge() {
			this.setState({ inData: { id: '', ticks: [] }, isShowGauge: !this.state.isShowGauge });
		}
	}, {
		key: 'play',
		value: function play() {
			var _this2 = this;

			if (this.timerID) return;
			// use lambda to bind "this"
			var poll = function poll() {
				_this2.loadData('/api/btc-tick');
				_this2.loadData('/api/btc-trade');
				_this2.timerID = setTimeout(poll, 1000);
			};
			this.timerID = setTimeout(poll, 1000);
		}
	}, {
		key: 'pause',
		value: function pause() {
			if (this.timerID) {
				clearTimeout(this.timerID);
				this.timerID = undefined;
			}
		}
	}, {
		key: 'loadData',
		value: function loadData(uri) {
			var _this3 = this;

			fetch(uri).then(function (res) {
				if (res.ok) {
					res.json().then(function (data) {
						//console.log(data);
						_this3.setState({ inData: data, isShowGauge: _this3.state.isShowGauge });
					});
				}
			}).catch(function (err) {
				console.log('Error in feching data from server: ' + err);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Header2.default, { play: this.play, pause: this.pause, toggleGauge: this.toggleGauge }),
				_react2.default.createElement(_GaugeGrid2.default, { isShow: this.state.isShowGauge, inData: this.state.inData }),
				_react2.default.createElement(_ChartGrid2.default, { id: this.state.inData.id, ticks: this.state.inData.ticks })
			);
		}
	}]);

	return AppStart;
}(_react2.default.Component);

var contentNode = document.getElementById('contents');
_reactDom2.default.render(_react2.default.createElement(AppStart, null), contentNode);

// HMR from webpack-dev
if (false) {}

/***/ }),

/***/ "./src/Chart.jsx":
/*!***********************!*\
  !*** ./src/Chart.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _recharts = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");

var _Modal = __webpack_require__(/*! ./Modal.jsx */ "./src/Modal.jsx");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PriceChart = function (_React$Component) {
	_inherits(PriceChart, _React$Component);

	function PriceChart(props) {
		_classCallCheck(this, PriceChart);

		/*
  this.state = { prices: [
  	{time:'12:01', bid: 12, ask: 19, },
  	{time:'12:02', bid: 18, ask: 22,},
  	{time:'12:03', bid: 7,  ask: 45,},
  ]};*/
		var _this = _possibleConstructorReturn(this, (PriceChart.__proto__ || Object.getPrototypeOf(PriceChart)).call(this, props));

		_this.openModal = _this.openModal.bind(_this);
		_this.closeModal = _this.closeModal.bind(_this);
		_this.state = { prices: [], yAxisDomain: [], isModal: false };
		return _this;
	}

	_createClass(PriceChart, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			if (newProps.ticks == null || !newProps.id) return;

			var found = newProps.ticks.find(function (tk) {
				return tk.title == newProps.title;
			});
			if (found) {
				this.update({ time: newProps.id.substr(-9, 5), bid: found.bid, ask: found.ask });
			}
		}
	}, {
		key: 'update',
		value: function update(price) {
			var newPrices = this.state.prices.slice();
			newPrices.push(price);
			var bid = price.bid;
			var ask = price.ask;
			var yDomain = this.state.yAxisDomain.slice();
			var gap = (ask - bid) / 2;
			if (yDomain.length < 2) {
				yDomain = [bid - gap, ask + gap];
			} else {
				yDomain[0] = bid - gap < yDomain[0] ? bid - gap : yDomain[0];
				yDomain[1] = ask + gap > yDomain[1] ? ask + gap : yDomain[1];
			}
			this.setState({ prices: newPrices, yAxisDomain: yDomain, isModal: this.state.isModal });
		}
	}, {
		key: 'openModal',
		value: function openModal() {
			this.setState({
				prices: this.state.prices,
				yAxisDomain: this.state.yAxisDomain,
				isModal: true
			});
		}
	}, {
		key: 'closeModal',
		value: function closeModal() {
			this.setState({
				prices: this.state.prices,
				yAxisDomain: this.state.yAxisDomain,
				isModal: false
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var pc = _react2.default.createElement(
				_recharts.ResponsiveContainer,
				{ minHeight: 150, height: '25%' },
				_react2.default.createElement(
					_recharts.LineChart,
					{ data: this.state.prices, margin: { top: 2, right: 2, left: 15, bottom: 2 }, onClick: this.openModal },
					_react2.default.createElement(_recharts.XAxis, { dataKey: 'time' }),
					_react2.default.createElement(_recharts.YAxis, { domain: [Math.floor(this.state.yAxisDomain[0] * 10) / 10, Math.ceil(this.state.yAxisDomain[1] * 10) / 10] }),
					_react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
					_react2.default.createElement(_recharts.Tooltip, null),
					_react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'bid', stroke: '#8884d8' }),
					_react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'ask', stroke: '#f44242' })
				)
			);

			if (this.state.isModal) {
				return _react2.default.createElement(
					'div',
					null,
					pc,
					_react2.default.createElement(_Modal2.default, { title: this.props.title, priceChart: pc, closeMe: this.closeModal })
				);
			}
			return pc;
		}
	}]);

	return PriceChart;
}(_react2.default.Component);

exports.default = PriceChart;

/***/ }),

/***/ "./src/ChartGrid.jsx":
/*!***************************!*\
  !*** ./src/ChartGrid.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Chart = __webpack_require__(/*! ./Chart.jsx */ "./src/Chart.jsx");

var _Chart2 = _interopRequireDefault(_Chart);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gStyle = {
	'margin-top': '50px'
};

var ChartGrid = function ChartGrid(props) {
	var titles = ['Coinbase', 'Gemini', 'Itbit', 'Btcc', 'Bitstamp', 'Bitfinex', 'Cex', 'Bitbay', 'Gdax'];

	var charts = titles.map(function (t) {
		return _react2.default.createElement(
			_reactBootstrap.Col,
			{ xs: 12, sm: 6, md: 4 },
			_react2.default.createElement(
				_reactBootstrap.Table,
				{ condensed: true, hover: true, striped: true },
				_react2.default.createElement(
					'thead',
					null,
					_react2.default.createElement(
						'tr',
						null,
						_react2.default.createElement(
							'th',
							null,
							t
						)
					)
				),
				_react2.default.createElement(
					'tbody',
					null,
					_react2.default.createElement(
						'tr',
						null,
						_react2.default.createElement(
							'td',
							null,
							_react2.default.createElement(_Chart2.default, { title: t, id: props.id, ticks: props.ticks })
						)
					)
				)
			)
		);
	});

	return _react2.default.createElement(
		_reactBootstrap.Grid,
		{ style: gStyle },
		_react2.default.createElement(
			_reactBootstrap.Row,
			null,
			charts
		)
	);
};

exports.default = ChartGrid;

/***/ }),

/***/ "./src/Gauge.jsx":
/*!***********************!*\
  !*** ./src/Gauge.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AccumTradeGauge = exports.TickTradeGauge = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactSvgGauge = __webpack_require__(/*! react-svg-gauge */ "./node_modules/react-svg-gauge/lib/Gauge.js");

var _reactSvgGauge2 = _interopRequireDefault(_reactSvgGauge);

var _reactRadialGauge = __webpack_require__(/*! react-radial-gauge */ "./node_modules/react-radial-gauge/dist/gauge.js");

var _reactRadialGauge2 = _interopRequireDefault(_reactRadialGauge);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TickTradeGauge = exports.TickTradeGauge = function TickTradeGauge(props) {
	var to = props.trans.to;
	var from = props.trans.from;
	var diff = to.bid && from.ask ? Math.round(to.bid - from.ask) : 0;
	var text = to.bid && from.ask ? Math.round(to.bid) + '-' + Math.round(from.ask) : '';
	return _react2.default.createElement(_reactSvgGauge2.default, { min: -1500, max: 1500, value: diff, width: 200, height: 200,
		label: text });
};

var AccumTradeGauge = exports.AccumTradeGauge = function (_React$Component) {
	_inherits(AccumTradeGauge, _React$Component);

	function AccumTradeGauge(props) {
		_classCallCheck(this, AccumTradeGauge);

		var _this = _possibleConstructorReturn(this, (AccumTradeGauge.__proto__ || Object.getPrototypeOf(AccumTradeGauge)).call(this, props));

		_this.state = { sum: 0, titleList: [] };
		return _this;
	}

	_createClass(AccumTradeGauge, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			var to = newProps.trans.to;
			var from = newProps.trans.from;
			if (to && to.title && from && from.title) {
				var diff = to.bid - from.ask;
				var sum = this.state.sum + diff;
				var list = this.state.titleList.slice();
				list.push(from.title + ' -> ' + to.title + ' : $' + diff);
				this.setState({ sum: sum, titleList: list });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var popOver = _react2.default.createElement(
				_reactBootstrap.Popover,
				{ id: 'popover-positioned-bottom', title: 'trade list' },
				this.state.titleList.map(function (t) {
					return _react2.default.createElement(
						'div',
						null,
						t
					);
				})
			);
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_reactRadialGauge2.default, { currentValue: Math.round(this.state.sum), maximumValue: Math.round(this.state.sum * 2),
					size: 200, dialWidth: 18, dialColor: '#FCFFAB', tickWidth: 4, tickColor: '#2980B9',
					needleSharp: true, needleBaseColor: '#E74C3C', needleColor: '#2980B9', needleBaseSize: 10, needleWidth: 7,
					progressColor: '#3498DB', progressWidth: 10 }),
				_react2.default.createElement(
					_reactBootstrap.OverlayTrigger,
					{ trigger: 'focus', placement: 'bottom', overlay: popOver },
					_react2.default.createElement(
						_reactBootstrap.Button,
						{ bsSize: 'xsmall', bsStyle: 'info' },
						'Trade List'
					)
				)
			);
		}
	}]);

	return AccumTradeGauge;
}(_react2.default.Component);

/***/ }),

/***/ "./src/GaugeGrid.jsx":
/*!***************************!*\
  !*** ./src/GaugeGrid.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Gauge = __webpack_require__(/*! ./Gauge.jsx */ "./src/Gauge.jsx");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gStyle = {
	'margin-top': '50px'
};

var GaugeGrid = function (_React$Component) {
	_inherits(GaugeGrid, _React$Component);

	function GaugeGrid(props) {
		_classCallCheck(this, GaugeGrid);

		var _this = _possibleConstructorReturn(this, (GaugeGrid.__proto__ || Object.getPrototypeOf(GaugeGrid)).call(this, props));

		_this.state = { id: '', iTrade: 0, dTrade: 0, iTrans: { to: {}, from: {} }, dTrans: { to: {}, from: {} } };
		_this.idealMap = new Map();
		return _this;
	}

	_createClass(GaugeGrid, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			var data = newProps.inData;
			if (data.type == 'tick' && data.id && data.from && data.to) {
				this.idealMap.set(data.id, { to: data.to, from: data.from });
			} else if (data.type == 'trade' && data.id && data.from && data.to) {
				if (this.idealMap.has(data.id)) {
					var iTrans = this.idealMap.get(data.id);
					var dTrans = { to: data.to, from: data.from };
					this.setState({ id: data.id, iTrans: iTrans, dTrans: dTrans });
					this.idealMap.delete(data.id);
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.props.isShow == false) {
				return _react2.default.createElement(_reactBootstrap.Grid, null);
			}
			return _react2.default.createElement(
				_reactBootstrap.Grid,
				{ style: gStyle },
				_react2.default.createElement(
					_reactBootstrap.Row,
					null,
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ xs: 6, sm: 6, md: 3 },
						_react2.default.createElement(
							_reactBootstrap.Table,
							{ condensed: true, hover: true, bordered: true },
							_react2.default.createElement(
								'thead',
								null,
								_react2.default.createElement(
									'tr',
									null,
									_react2.default.createElement(
										'th',
										null,
										'tick earning (0-delay)'
									)
								)
							),
							_react2.default.createElement(
								'tbody',
								null,
								_react2.default.createElement(
									'tr',
									null,
									_react2.default.createElement(
										'td',
										null,
										this.state.id,
										' ',
										_react2.default.createElement('br', null),
										this.state.iTrans.from.title ? this.state.iTrans.from.title + ' => ' + this.state.iTrans.to.title : null
									)
								),
								_react2.default.createElement(
									'tr',
									null,
									_react2.default.createElement(
										'td',
										null,
										_react2.default.createElement(_Gauge.TickTradeGauge, { trans: this.state.iTrans })
									)
								)
							)
						)
					),
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ xs: 6, sm: 6, md: 3 },
						_react2.default.createElement(
							_reactBootstrap.Table,
							{ condensed: true, hover: true, bordered: true },
							_react2.default.createElement(
								'thead',
								null,
								_react2.default.createElement(
									'tr',
									null,
									_react2.default.createElement(
										'th',
										null,
										'tick earning (60s-delay)'
									)
								)
							),
							_react2.default.createElement(
								'tbody',
								null,
								_react2.default.createElement(
									'tr',
									null,
									_react2.default.createElement(
										'td',
										null,
										this.state.id,
										' ',
										_react2.default.createElement('br', null),
										this.state.dTrans.from.title ? this.state.dTrans.from.title + ' => ' + this.state.dTrans.to.title : null
									)
								),
								_react2.default.createElement(
									'tr',
									null,
									_react2.default.createElement(
										'td',
										null,
										_react2.default.createElement(_Gauge.TickTradeGauge, { trans: this.state.dTrans })
									)
								)
							)
						)
					),
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ xs: 6, sm: 6, md: 3 },
						_react2.default.createElement(
							_reactBootstrap.Table,
							{ condensed: true, hover: true, bordered: true },
							_react2.default.createElement(
								'thead',
								null,
								_react2.default.createElement(
									'tr',
									null,
									_react2.default.createElement(
										'th',
										null,
										'total earning (0-delay)'
									)
								)
							),
							_react2.default.createElement(
								'tbody',
								null,
								_react2.default.createElement(
									'tr',
									null,
									_react2.default.createElement(
										'td',
										null,
										this.state.id,
										' ',
										_react2.default.createElement('br', null)
									)
								),
								_react2.default.createElement(
									'tr',
									null,
									_react2.default.createElement(
										'td',
										null,
										_react2.default.createElement(_Gauge.AccumTradeGauge, { trans: this.state.iTrans })
									)
								)
							)
						)
					),
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ xs: 6, sm: 6, md: 3 },
						_react2.default.createElement(
							_reactBootstrap.Table,
							{ condensed: true, hover: true, bordered: true },
							_react2.default.createElement(
								'thead',
								null,
								_react2.default.createElement(
									'tr',
									null,
									_react2.default.createElement(
										'th',
										null,
										'total earning (60s-delay)'
									)
								)
							),
							_react2.default.createElement(
								'tbody',
								null,
								_react2.default.createElement(
									'tr',
									null,
									_react2.default.createElement(
										'td',
										null,
										this.state.id,
										' ',
										_react2.default.createElement('br', null)
									)
								),
								_react2.default.createElement(
									'tr',
									null,
									_react2.default.createElement(
										'td',
										null,
										_react2.default.createElement(_Gauge.AccumTradeGauge, { trans: this.state.dTrans })
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return GaugeGrid;
}(_react2.default.Component);

exports.default = GaugeGrid;

/***/ }),

/***/ "./src/Header.jsx":
/*!************************!*\
  !*** ./src/Header.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var titles = ['Coinbase', 'Gemini', 'Itbit', 'Btcc', 'Bitstamp', 'Bitfinex', 'Cex', 'Bitbay', 'Gdax'];
var about = {
	'Coinbase': 'https://api.coinbase.com/v2/prices/',
	'Gemini': 'https://api.gemini.com/v1/pubticker/btcusd',
	'Itbit': 'https://api.itbit.com/v1/markets/XBTUSD/ticker',
	'Btcc': 'https://spotusd-data.btcc.com/data/pro/ticker?symbol=BTCUSD',
	'Bitstamp': 'https://www.bitstamp.net/api/v2/ticker/',
	'Bitfinex': 'https://api.bitfinex.com/v2/ticker/',
	'Cex': 'https://cex.io/api/ticker/BTC/USD',
	'Bitbay': 'https://bitbay.net/API/Public/BTC/USD/ticker.json',
	'Gdax': 'https://api.gdax.com/products/BTC-USD/ticker'
};

var popWrapper = _react2.default.createElement(
	_reactBootstrap.SplitButton,
	{ bsSize: 'xsmall', bsStyle: 'info', title: ' About ', key: 'Help', id: 'split-button-basic' },
	titles.map(function (title) {
		return _react2.default.createElement(
			_reactBootstrap.OverlayTrigger,
			{ trigger: ['focus'], placement: 'left', overlay: _react2.default.createElement(
					_reactBootstrap.Popover,
					{ id: 'popover-positioned-left', title: title + ' REST-API' },
					'Hello from ',
					title,
					' ',
					_react2.default.createElement('br', null),
					' ',
					_react2.default.createElement(
						'strong',
						null,
						' ',
						about[title],
						' '
					)
				) },
			_react2.default.createElement(
				_reactBootstrap.MenuItem,
				{ eventKey: title },
				title
			)
		);
	})
);

var Header = function Header(props) {

	return _react2.default.createElement(
		_reactBootstrap.Navbar,
		{ inverse: true, collapseOnSelect: true, fixedTop: true },
		_react2.default.createElement(
			_reactBootstrap.Navbar.Header,
			null,
			_react2.default.createElement(
				_reactBootstrap.Navbar.Brand,
				null,
				_react2.default.createElement(
					'a',
					{ href: '#' },
					'CryptoWatch'
				)
			),
			_react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
		),
		_react2.default.createElement(
			_reactBootstrap.Navbar.Collapse,
			null,
			_react2.default.createElement(
				_reactBootstrap.Nav,
				null,
				_react2.default.createElement(
					_reactBootstrap.NavItem,
					null,
					_react2.default.createElement(
						_reactBootstrap.Button,
						{ bsSize: 'xsmall', bsStyle: 'primary', onClick: props.play },
						_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'play' }),
						' start'
					)
				),
				_react2.default.createElement(
					_reactBootstrap.NavItem,
					null,
					_react2.default.createElement(
						_reactBootstrap.Button,
						{ bsSize: 'xsmall', bsStyle: 'success', onClick: props.pause },
						_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'pause' }),
						' pause'
					)
				),
				_react2.default.createElement(
					_reactBootstrap.NavItem,
					null,
					_react2.default.createElement(
						_reactBootstrap.Button,
						{ bsSize: 'xsmall', bsStyle: 'danger', onClick: props.toggleGauge },
						_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'dashboard' }),
						' gauge'
					)
				)
			),
			_react2.default.createElement(
				_reactBootstrap.Nav,
				{ pullRight: true },
				_react2.default.createElement(
					_reactBootstrap.NavItem,
					null,
					popWrapper
				)
			)
		)
	);
};

exports.default = Header;

/***/ }),

/***/ "./src/Modal.jsx":
/*!***********************!*\
  !*** ./src/Modal.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

var _Chart = __webpack_require__(/*! ./Chart.jsx */ "./src/Chart.jsx");

var _Chart2 = _interopRequireDefault(_Chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalChart = function (_React$Component) {
	_inherits(ModalChart, _React$Component);

	function ModalChart() {
		_classCallCheck(this, ModalChart);

		return _possibleConstructorReturn(this, (ModalChart.__proto__ || Object.getPrototypeOf(ModalChart)).apply(this, arguments));
	}

	_createClass(ModalChart, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactBootstrap.Modal,
				{ show: true, onHide: this.props.closeMe, bsSize: 'large' },
				_react2.default.createElement(
					_reactBootstrap.Modal.Header,
					{ closeButton: true },
					_react2.default.createElement(
						_reactBootstrap.Modal.Title,
						null,
						this.props.title
					)
				),
				_react2.default.createElement(
					_reactBootstrap.Modal.Body,
					null,
					this.props.priceChart
				),
				_react2.default.createElement(
					_reactBootstrap.Modal.Footer,
					null,
					_react2.default.createElement(
						_reactBootstrap.Button,
						{ onClick: this.props.closeMe },
						'Close'
					)
				)
			);
		}
	}]);

	return ModalChart;
}(_react2.default.Component);

exports.default = ModalChart;

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map