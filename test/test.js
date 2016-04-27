var test = require('tape');
var request = require('supertest');
var server = require('../app');
var jsonTree = require('../lib/jsonTree');

/**
* Testing function for Product API
*/
test('List Products', function(t){
	request(server)
		.get('/products/')
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function(err, res) {
			t.error(err, 'No error');
			t.end();
		});
});

test('Filtering Products by Size', function(t){
	var size = 'test aja';
	request(server)
		.get('/products/search/size=' + size)
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function(err, res) {
			t.error(err, 'No error');
			t.end();
		});
});

test('Filtering Products by Color', function(t){
	var color = 'test aja';
	request(server)
		.get('/products/search/color=' + color)
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function(err, res) {
			t.error(err, 'No error');
			t.end();
		});
});

test('Filtering Products by Prize Range', function(t){
	var prize = 'test aja';
	request(server)
		.get('/products/search/prize/min=' + prize + '&max=' + prize)
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function(err, res) {
			t.error(err, 'No error');
			t.end();
		});
});

test('Products by Category', function(t){
	var category = 'test aja';
	request(server)
		.get('/products/category/' + category )
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function(err, res) {
			t.error(err, 'No error');
			t.end();
		});
});

//test case for insert and update
var product = 
	{
		"id" : "1",
		"name" : "test product",
		"id_category" : "1",
		"prize" : "1",
	};
	
test('Add Product', function(t){
	request(server)
		.post('/products/')
		//.send(product) //uncomment this line if want to test insert function
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function(err, res) {
			t.error(err, 'No error');
			//uncomment bellow if want to test insert function
			//t.same(res.body, {status: 0, message: 'Product creation successfully.'}, 'Save');
			t.end();
		});
});

test('Update Product', function(t){
	request(server)
		.put('/products/')
		//.send(product) //uncomment this line if want to test update function
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function(err, res) {
			t.error(err, 'No error');
			//uncomment bellow if want to test update function
			//t.same(res.body, {status: 0, message: 'Product update successfully.'}, 'Update');
			t.end();
		});
});

//test case for delete function
var id_product = "12";

test('Delete Product', function(t){
	request(server)
		.delete('/products/' + id_product)
		//.send(id_product) //uncomment this line if want to test delete function
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function(err, res) {
			t.error(err, 'No error');
			//uncomment bellow if want to test delete function
			//t.same(res.body, {status: 0, message: 'Product deleted successfully.'}, 'Delete');
			t.end();
		});
});

/**
* Testing function for Category API
*/
test('List Category', function(t){
	request(server)
		.get('/categories/')
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function(err, res) {
			t.error(err, 'No error');
			t.end();
		});
});

//test case for insert and update
var category = 
	{
		"id" : "1",
		"name" : "test category"
	};
	
test('Add Category', function(t){
	request(server)
		.post('/categories/')
		//.send(category) //uncomment this line if want to test insert function
		.expect(200)
		.end(function(err, res) {
			t.error(err, 'No error');
			//uncomment bellow if want to test insert function
			//t.same(res.body, {status: 0, message: 'Category creation successfully.'}, 'Save');
			t.end();
		});
});

test('Update Category', function(t){
	request(server)
		.put('/categories/')
		//.send(category) //uncomment this line if want to test update function
		.expect(200)
		.end(function(err, res) {
			t.error(err, 'No error');
			//uncomment bellow if want to test update function
			//t.same(res.body, {status: 0, message: 'Category update successfully.'}, 'Update');
			t.end();
		});
});

//test case for delete
var id_category = "12";

test('Delete Category', function(t){
	request(server)
		.delete('/categories/' + id_category)
		//.send(id_category) //uncomment this line if want to test delete function
		.expect(200)
		.end(function(err, res) {
			t.error(err, 'No error');
			//uncomment bellow if want to test delete function
			//t.same(res.body, {status: 0, message: 'Category deleted successfully.'}, 'Delete');
			t.end();
		});
});

/**
* Testing other function
*/
test('Json Tree', function(t){
	var flatjson = [{"id":1,"name":"Baju","id_parent":null},{"id":2,"name":"Baju Wanita","id_parent":1},{"id":3,"name":"Baju Pria","id_parent":1}];
	var treejson = {"children":[{"id":2,"name":"Baju Wanita"},{"id":3,"name":"Baju Pria"}],"id":1,"id_parent":null,"name":"Baju"};
	t.same(jsonTree(flatjson), treejson, "Working");
	t.end();
});