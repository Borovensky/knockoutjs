var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('public'))

app.get(['/', '*'],  function(req, res){
	 fs.readFile('./public/index.html', 'utf-8', function(err, body){
	 	res.send(body);
	 });
});

app.listen(8000);
