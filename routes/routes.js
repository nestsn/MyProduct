var product = require('../models/product');
var category = require('../models/category');

module.exports = {
	configure: function(app) {
		app.get('/', function(req,res) {
			res.send({"Message" : "Do nothing"});
		});
	
		//product api
		app.get('/products/', function(req, res) {
			product.get("", res);
		});
		
		app.get('/products/search/size=:size', function(req, res) {
			product.get({size : req.params.size}, res);
		});
		
		app.get('/products/search/color=:color', function(req, res) {
			product.get({color : '%' + req.params.color + '%'}, res);
		});
		
		app.get('/products/search/prize/min=:min&max=:max', function(req, res) {
			product.get({prizeMin : req.params.min, prizeMax : req.params.max}, res);
		});
		
		app.get('/products/search/prize/min=:min', function(req, res) {
			product.get({prizeMin : req.params.min}, res);
		});
		
		app.get('/products/search/prize/max=:max', function(req, res) {
			product.get({prizeMax : req.params.max}, res);
		});
		
		app.get('/products/category/:name', function(req, res) {
			product.get({categoryName : req.params.name}, res);
		});
		
		app.post('/products/', function(req, res) {
			product.create(req.body, res);
		});
		
		app.put('/products/', function(req, res) {
			product.update(req.body, res);
		});
		
		app.delete('/products/:id/', function(req, res) {
			product.delete(req.params.id, res);
		});
		
		//category api
		app.get('/categories/', function(req, res) {
			category.get(res);
		});
		
		app.post('/categories/', function(req, res) {
			category.create(req.body, res);
		});
		
		app.put('/categories/', function(req, res) {
			category.update(req.body, res);
		});
		
		app.delete('/categories/:id/', function(req, res) {
			category.delete(req.params.id, res);
		});
	}
};