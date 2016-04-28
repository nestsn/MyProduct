var mysql = require('mysql');

function Connection() {
	this.pool = null;
	
	this.init = function() {
		this.pool = mysql.createPool({
			connectionLimit: 10,
			host: 'localhost',
			user: 'root',
			password: '874521',
			database: 'my_products'
		});
	};
	
	this.acquire = function(callback) {
		this.pool.getConnection(function(err, connection) {
			callback(err, connection);
		});
	};
}

module.exports = new Connection();