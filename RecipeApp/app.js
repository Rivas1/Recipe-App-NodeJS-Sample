var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// View Engine
app.set('view engine', 'ejs');
app.set( 'views', path.join(__dirname, 'views'));

// Body parser middlewarre
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));

// Set static path
app.use( express.static( path.join( __dirname, 'public' ) ));


// app.get ( website, function ( request, response ) ) {}
app.get( '/', function( req, res ) 
{
	res.render('index');
});




app.post('/recipes/add', function( req, res ) 
{
	var newUser = 
	{
		user_name: req.body.username,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email
	};

	var newRecipe = 
	{
		recipe_name: req.body.recipe_name,
		ingredient1_name: req.body.ing1_name,
		ingredient2_name: req.body.ing2_name,
	};
	console.log("New user added")
	console.log(newUser);
	console.log('New recipe added');
	console.log(newRecipe);
});

app.listen( 3000, function() 
{
	console.log('Server started on Port 3000.');
});

