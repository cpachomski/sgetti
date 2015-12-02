var express = require('express');
<<<<<<< HEAD
var ejs = require('ejs');
var app = express();

var port = process.env.PORT || 8080;

app.engine('html', ejs.renderFile);
app.set('views', __dirname);

app.use(express.static(__dirname + '/'));

app.get('*', function( request, response ){
  response.render('index.html');
});


app.listen(port, function(){
  console.log('Now running on port ' + port + '...');
});
=======

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
>>>>>>> 8e120e950615ecfcbcdc38df5bc364498a372e03
