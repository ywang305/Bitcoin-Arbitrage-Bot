'use strict';

var _sourceMapSupport = require('source-map-support');

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongodb = require('mongodb');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// npm install --save source-map-support
_sourceMapSupport2.default.install(); // ES2015-completed

const app = (0, _express2.default)();
app.use(_express2.default.static('static'));
app.use(_bodyParser2.default.json());

let db;

_mongodb.MongoClient.connect('mongodb://localhost:27017').then(clientDB => {
	db = clientDB.db('arbitrage'); // new from version 3.0
	app.listen(3000, () => {
		console.log('App started on port 3000');
	});
}).catch(err => {
	console.log('ERROR: ', err);
});

let cache = { tick: null, trade: null };

// return latest doc from mongo
app.get('/api/btc-tick', (req, res) => {
	if (cache.tick) {
		let data = cache.tick;
		cache.tick = null;
		res.json(data);
	} else {
		res.status(500).json({ message: 'no data yet' });
	}

	/*
 db.collection('btc').find().sort({_id:-1}).limit(1).toArray().then( (latest)=>
 {
 	res.json(latest);
 })
 	.catch((err) => {
 		console.log(err);
 		res.status(500).json({ message: `Internal Server Error: ${err}` });
 	});  
 */
});

app.get('/api/btc-trade', (req, res) => {
	if (cache.trade) {
		let data = cache.trade;
		cache.trade = null;
		res.json(data);
	} else {
		res.status(500).json({ message: 'no data yet' });
	}
});

app.post('/api/btc', (req, res) => {
	/* // -- no mongod 
 res.sendStatus(200);
 const data = req.body; // body-parser assign to it
 if(data.type=='tick') {
 	cache.tick = data;
 } else if (data.type=='trade') {
 	cache.trade = data;
 }
 */

	const data = req.body; // body-parser assign to it

	db.collection('btc').insertOne(data).then(() => {
		res.sendStatus(200);
		cache[data.type] = data;
	}).catch(err => {
		console.log(err);
		res.status(500).json({ message: `Internal Server Error: ${err}` });
	});
});
//# sourceMappingURL=server.js.map