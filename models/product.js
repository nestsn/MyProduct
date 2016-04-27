var connection = require('../connection');
var allSize = {s:"s", m:"m", l:"l", xl:"xl", xxl:"xxl", xxxl:"xxxl", xxxxl:"xxxxl"};
var allColor = {biru:"biru", merah:"merah", hitam:"hitam", putih:"putih", coklat:"coklat", emas:"emas", hijau:"hijau", kuning:"kuning", oranye:"oranye", pink:"pink", ungu:"ungu"};

function Product() {
	this.get = function(param, res) {
		connection.acquire(function(err, con) {
			if(param) {
				if(param.size) {
					if(allSize[(param.size).toLowerCase()])
					{
						con.query('select * from products where size = ?', param.size, function(err, result) {
							con.release();
							res.send(result);
						});
					} else {
						res.send({message: 'No result match.'});
					}
				} else if(param.color) {
					if(allColor[(param.color.replace(/%/g, '')).toLowerCase()])
					{
						con.query('select * from products where color like ?', param.color, function(err, result) {
							con.release();
							res.send(result);
						});
					} else {
						res.send({message: 'No result match.'});
					}
				} else if(param.prizeMin || param.prizeMax ) {
					if(param.prizeMin && parseInt(param.prizeMin) && parseInt(param.prizeMin) > 0) {
						if(param.prizeMax && parseInt(param.prizeMax) && parseInt(param.prizeMax) > parseInt(param.prizeMin)) {
							con.query('select * from products where prize BETWEEN ? AND ?', [param.prizeMin, param.prizeMax], function(err, result) {
								con.release();
								res.send(result);
							});
						} else {
							con.query('select * from products where prize >= ?', [param.prizeMin], function(err, result) {
								con.release();
								res.send(result);
							});
						}
					} else if(param.prizeMax && parseInt(param.prizeMax) && parseInt(param.prizeMax) > 0) {
						con.query('select * from products where prize <= ?', [param.prizeMax], function(err, result) {
							con.release();
							res.send(result);
						});
					} else {
						res.send({message: 'No result match.'});
					}
				} else if(param.categoryName) {
					con.query('select * from products where id_category in(select id from categories where id_parent in (select id from categories where name = ?) || name = ?)', [param.categoryName, param.categoryName], function(err, result) {
						con.release();
						res.send(result);
					});
				} else {
					res.send({message: 'No result match.'});
				}
			} else {
				con.query('select * from products', function(err, result) {
					con.release();
					res.send(result);
				});
			}
		});
	};
		
	this.create = function(product, res) {
		connection.acquire(function(err, con) {
			con.query('insert into products set ?', product, function(err, result) {
				con.release();
				if(err) {
					res.send({status: 1, message: 'Product creation failed.'});
				} else {
					res.send({status: 0, message: 'Product creation successfully.'});
				}
			});
		});
	};
	
	this.update = function(product, res) {
		connection.acquire(function(err, con) {
			con.query('update products set ? where id = ?', [product, product.id], function(err, result) {
				con.release();
				if(err) {
					res.send({status: 1, message: 'Product update failed.'});
				} else {
					res.send({status: 0, message: 'Product update successfully.'});
				}
			});
		});
	};
	
	this.delete = function(id, res) {
		connection.acquire(function(err, con) {
			con.query('delete from products where id = ?', [id], function(err, result) {
				con.release();
				if(err) {
					res.send({status: 1, message: 'Product failed to delete.'});
				} else {
					res.send({status: 0, message: 'Product deleted successfully.'});
				}
			});
		});
	};
}

module.exports = new Product();