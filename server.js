// Let's get the first page up and running
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/assets'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


//Routing
app.get('/', function(req, res) {
	res.send('./assets/index.html');
});

app.get('/menu', function(req, res) {
	res.render('./assets/menu.html');
});

app.get('/order', function(req, res) {
	res.render('/assets/order.html');
});

app.get('/help', function(req, res) {
	res.render('help.html');
});

// Setting up local port
app.listen(app.get('port'), function() {
console.log("Node app is running at localhost:" + app.get('port'));
});