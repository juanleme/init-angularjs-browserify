(function() {
    'use strict';

    module.exports = angular

    .module('anbfy.directive.hello', [])
    .directive('abHelloWorld', helloWorld);

    function helloWorld () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: 'app/shared/hello/hello.view.html'
        };
    }

})();
