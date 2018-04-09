'use strict';

var _sourceMapSupport = require('source-map-support');

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ES2015-completed
_sourceMapSupport2.default.install(); // npm install --save source-map-support

const app = (0, _express2.default)();
app.use(_express2.default.static('static'));
app.use(_bodyParser2.default.json());

let Debug = console.log;

app.post('/api/btc', (req, res) => {
	const data = req.body; // body-parser assign to it
	Debug('server rcv:\n', data);
	res.json(data);
});

app.listen(3000, function () {
	console.log('App started on port 3000');
});
//# sourceMappingURL=server.js.map