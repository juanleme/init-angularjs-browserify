(function() {
    'use strict';

	require('angular');
	require('./app.routes');
	require('./components/home/home.controller');
	require('./shared/hello/hello.directive');

    angular
	    .module('anbfy', [
		   	'anbfy.routes',
		   	'anbfy.home.controller',
		   	'anbfy.directive.hello'
		]);

})();
