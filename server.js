var express = require('express')
, exphbs  = require('express-handlebars')
, request = require('request')
, path = require('path')
, assert = require('assert')
, bodyParser = require('body-parser');

var React = require('react');
var ReactDOMServer = require('react-dom/server');
require("node-jsx").install();

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static(__dirname + '/public'));

//app.use(bodyParser.json()); // support json encoded bodies
//app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// React Components
var OfferTable = React.createFactory(require('./components/OfferTable'));
var OfferTable_initialProps = {title: "Markypoo"};


// Routes
app.get('/', function(req, res) {
	res.render('index', {
		reactHtml: ReactDOMServer.renderToStaticMarkup(OfferTable({})),
		props: JSON.stringify(OfferTable_initialProps)
	});
});


app.listen(6767);
console.log("server started at port 6767");