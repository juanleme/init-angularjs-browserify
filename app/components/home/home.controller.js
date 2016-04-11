(function() {
    'use strict';

    require('./home.service');

    module.exports = angular

    .module('anbfy.home.controller', ['anbfy.home.service'])
		.controller('HomeController', HomeController);

    HomeController.$inject = ['HomeService'];

    function HomeController (HomeService) {

        var vm = this;
        vm.users = [];

        activateUsers();

        function activateUsers() {
            return HomeService.getUsers()
              .then(function (data){
                  vm.users = data;
                  return vm.users;
              });
        }
    }
})();
