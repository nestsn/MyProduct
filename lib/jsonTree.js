module.exports = function(data) {
	var FlatToNested = require('flat-to-nested');
	var jsonFormat = new FlatToNested({
		id: 'id',
		parent: 'id_parent',
		children: 'children'
	});
	 
	var nestedData = jsonFormat.convert(data);	
	return nestedData;
}