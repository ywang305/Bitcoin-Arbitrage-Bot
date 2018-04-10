import SourceMapSupport from 'source-map-support'; // npm install --save source-map-support
import 'babel-polyfill'; // ES2015-completed
import express from 'express';
import bodyParser from 'body-parser';

SourceMapSupport.install();
const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());


app.post('/api/btc', (req, res) => {
	const data = req.body; // body-parser assign to it
	res.sendStatus(200);
	if(data.type=='trade') {
		let diff = data.to.bid-data.from.ask;
		console.log(`   >>>> id:${data.id} profit: ${diff} --- buy ${data.from.ask} then sell ${data.to.bid}\n`);
	} else {
		console.log(' >> server rcv :\n', data);
	}
});



app.listen(3000, function() {
	console.log('App started on port 3000');
});