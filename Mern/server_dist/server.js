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
let cache = null;

_mongodb.MongoClient.connect('mongodb://localhost:27017').then(clientDB => {
	db = clientDB.db('arbitrage'); // new from version 3.0
	app.listen(3000, () => {
		console.log('App started on port 3000');
	});
}).catch(err => {
	console.log('ERROR: ', err);
});

// return latest doc from mongo
app.get('/api/btc', (req, res) => {
	if (cache) {
		let data = cache;
		cache = null;
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

app.post('/api/btc', (req, res) => {
	const tick = req.body; // body-parser assign to it
	cache = tick;
	res.sendStatus(200);

	/*
 db.collection('btc').insertOne(tick).then( ()=>{
 	res.sendStatus(200);
 })
 	.catch((err) => {
 		console.log(err);
 		res.status(500).json({ message: `Internal Server Error: ${err}` });
 	}); */
});
//# sourceMappingURL=server.js.map