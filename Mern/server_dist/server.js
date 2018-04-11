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

app.get('/api/hello', (req, res) => {
	//res.send('Hello Syracuse!\n');
	res.json();
});

app.post('/api/btc', (req, res) => {
	const data = req.body; // body-parser assign to it
	res.sendStatus(200);
	if (data.type == 'trade') {
		let diff = data.to.bid - data.from.ask;
		console.log(`   >>>> id:${data.id} profit: ${diff} --- buy ${data.from.ask} then sell ${data.to.bid}\n`);
	} else {
		console.log(' >> server rcv :\n', data);
	}
});

app.listen(3000, function () {
	console.log('App started on port 3000');
});
//# sourceMappingURL=server.js.map