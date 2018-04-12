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


__webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ChartGrid = __webpack_require__(/*! ./ChartGrid.jsx */ "./src/ChartGrid.jsx");

var _ChartGrid2 = _interopRequireDefault(_ChartGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentNode = document.getElementById('contents');
_reactDom2.default.render(_react2.default.createElement(_ChartGrid2.default, null), contentNode);

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

__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");

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
  	{time:'12:01', Provider1: 12, Provider2: 19, },
  	{time:'12:02', Provider1: 18, Provider2: 22,},
  	{time:'12:03', Provider1: 7,  Provider2: 45,},
  ]};*/
		var _this = _possibleConstructorReturn(this, (PriceChart.__proto__ || Object.getPrototypeOf(PriceChart)).call(this, props));

		_this.state = { prices: [], yAxisDomain: [] };
		return _this;
	}

	_createClass(PriceChart, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			this.update(newProps.price);
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
			this.setState({ prices: newPrices, yAxisDomain: yDomain });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_recharts.LineChart,
				{ width: 800, height: 400, data: this.state.prices },
				_react2.default.createElement(_recharts.XAxis, { dataKey: 'time' }),
				_react2.default.createElement(_recharts.YAxis, { domain: this.state.yAxisDomain }),
				_react2.default.createElement(_recharts.Tooltip, null),
				_react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'bid', stroke: '#8884d8' }),
				_react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'ask', stroke: '#82ca9d' })
			);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Chart = __webpack_require__(/*! ./Chart.jsx */ "./src/Chart.jsx");

var _Chart2 = _interopRequireDefault(_Chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CharGrid = function (_React$Component) {
	_inherits(CharGrid, _React$Component);

	function CharGrid(props) {
		_classCallCheck(this, CharGrid);

		var _this = _possibleConstructorReturn(this, (CharGrid.__proto__ || Object.getPrototypeOf(CharGrid)).call(this, props));

		_this.state = { Gdax: {}, Trade: { ideal: 0.0, delay: 0.0 } };
		return _this;
	}

	_createClass(CharGrid, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.timerID = setInterval(function () {
				_this2.loadData('/api/btc-tick');
				_this2.loadData('/api/btc-trade');
			}, 1000);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearInterval(this.timerID);
		}
	}, {
		key: 'loadData',
		value: function loadData(uri) {
			var _this3 = this;

			fetch(uri).then(function (res) {
				if (res.ok) {
					res.json().then(function (data) {
						//console.log(data);
						_this3.update(data);
					});
				}
			}).catch(function (err) {
				console.log('Error in feching data from server: ' + err);
			});
		}
	}, {
		key: 'update',
		value: function update(data) {
			if (data.type && data.type == 'tick') {
				var bid = void 0,
				    ask = void 0;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = data.ticks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var d = _step.value;

						if (d.title == 'Coinbase') {
							bid = d.bid;
							ask = d.ask;
							break;
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				var clone = Object.assign({}, this.state.Trade);
				clone[data.id] = data.to.bid - data.from.ask;
				this.setState({ Gdax: { time: data.id.substr(-9, 5), bid: bid, ask: ask },
					Trade: clone
				});
			} else if (data.type && data.type == 'trade' && this.state.Trade[data.id]) {
				var realDiff = data.to.bid - data.from.ask;
				var idealDiff = this.state.Trade[data.id];
				var newIdeal = this.state.Trade.ideal + idealDiff;
				var newDelay = this.state.Trade.delay + realDiff;

				var _clone = Object.assign({}, this.state.Trade);
				delete _clone[data.id];
				_clone.ideal = newIdeal;
				_clone.delay = newDelay;

				this.setState({ Gdax: this.state.Gdax, Trade: _clone });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Chart2.default, { price: this.state.Gdax }),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(
					'div',
					null,
					' ideal: ',
					this.state.Trade.ideal,
					'    delay :  ',
					this.state.Trade.delay,
					' '
				)
			);
		}
	}]);

	return CharGrid;
}(_react2.default.Component);

exports.default = CharGrid;

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map