(function() {
    'use strict';

    module.exports = angular

    .module('anbfy.home.service', [])
    .factory('HomeService', HomeService);

    HomeService.$inject = ['$http', '$log'];

    function HomeService ($http, $log) {
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
            $log.error('XHR Failed for getUsers: '+ e.data);
        }

    }
})();
