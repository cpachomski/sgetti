var express = require('express');

var app = express();





var port = process.env.PORT || 3000;

//static files middleware
app.use(express.static(__dirname + '/'));

app.all('*', function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "X-Requested-With");
       res.header('Access-Control-Allow-Headers', 'Content-Type');
       next();
});


app.get('*', function(req, res, next){
	res.render('index.html');
});


var server = app.listen(port, function(){
	var host = server.address().address;
	console.log('App listening at http://%s:%s', host, port);
});


var getSgetti = function(){
	return [
		{
			name:'papa emilios',
			location: 'nyc',
		}
	]
};