var axios = require('axios');

module.exports = {
	retrieveVehicles: function() {
		return axios.get('https://gist.githubusercontent.com/creatifyme/2a334c00a117097bfdb47f031edf292c/raw/efb52ecf1cf92e2261f504ec7639c68b5ff390bd/cars.json')
		.then(function (response) {
			return response.data;
		});
	}
 }
