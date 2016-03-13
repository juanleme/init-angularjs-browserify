(function() {
    'use strict'    

    module.exports = angular

	    .module('anbfy.home.service', [])
			.factory('HomeService', homeService);
				
				function homeService () {
				    return {
				       	smile: function() {
					   		return ":)";
				    	}
				    };
				}
})();
