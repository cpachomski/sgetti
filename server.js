var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname);

app.use(express.static(__dirname + '/'));

app.get('*', function( request, response ){
  response.render('index.html');
});


app.listen(port, function(){
  console.log('Now running on port ' + port + '...');
});