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
	console.log('server rcv:\n', data);
	res.sendStatus(200);


});



app.listen(3000, function() {
	console.log('App started on port 3000');
});