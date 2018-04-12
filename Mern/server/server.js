import SourceMapSupport from 'source-map-support'; // npm install --save source-map-support
import 'babel-polyfill'; // ES2015-completed
import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

SourceMapSupport.install();
const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());

let db;
let cache = null;

MongoClient.connect('mongodb://localhost:27017').then((clientDB) => {
	db = clientDB.db('arbitrage'); // new from version 3.0
	app.listen(3000, () => {
		console.log('App started on port 3000');
	});
}).catch((err) => {
	console.log('ERROR: ', err);
});



// return latest doc from mongo
app.get('/api/btc', (req, res)=> {
	if( cache ) {
		let data = cache;
		cache = null;
		res.json(data);
	} else {
		res.status(500).json({message: 'no data yet'});
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

