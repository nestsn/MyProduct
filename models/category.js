var connection = require('../connection');
var jsonTree = require('../lib/jsonTree');

function Category() {
	this.get = function(res) {
		connection.acquire(function(err, con) {
			con.query('select * from categories', function(err, result) {
				con.release();
				res.send(result);
			});
		});
	};
	
	this.create = function(category, res) {
		connection.acquire(function(err, con) {
			con.query('insert into categories set ?', category, function(err, result) {
				con.release();
				if(err) {
					res.send({status: 1, message: 'Category creation failed.'});
				} else {
					res.send({status: 0, message: 'Category creation successfully.'});
				}
			});
		});
	};
	
	this.update = function(category, res) {
		connection.acquire(function(err, con) {
			con.query('update categories set ? where id = ?', [category, category.id], function(err, result) {
				con.release();
				if(err) {
					res.send({status: 1, message: 'Category update failed.'});
				} else {
					res.send({status: 0, message: 'Category update successfully.'});
				}
			});
		});
	};
	
	this.delete = function(id, res) {
		connection.acquire(function(err, con) {
			con.query('delete from categories where id = ?', [id], function(err, result) {
				con.release();
				if(err) {
					res.send({status: 1, message: 'Category failed to delete.'});
				} else {
					res.send({status: 0, message: 'Category deleted successfully.'});
				}
			});
		});
	};
}

module.exports = new Category();