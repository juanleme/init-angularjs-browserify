(function() {
    'use strict'

	require('./home.service');

    module.exports = angular

	    .module('anbfy.home.controller', ['anbfy.home.service'])
			.controller('HomeController', ['HomeService', homeController]);

			function homeController (HomeService) {
				this.smile = HomeService.smile();
			}
})();
