(function() {
    'use strict'    

    module.exports = angular

		.module('anbfy.home.service', [])
		.factory('HomeService', HomeService);
				
		HomeService.$inject = ['$http'];
				
		function HomeService ($http) {
		    return {
		       	getUsers: getUsers
		    };
		
			function getUsers () {
		   		return $http.get('http://jsonplaceholder.typicode.com/users')
		   		.then(complete)
		   		.catch(error);
		    }
		    function complete (response) {
		    	return response.data;
		    }
		    function error (e) {
		    	console.error('XHR Failed for getUsers: '+ e.data);
		    }
			
		}
})();
