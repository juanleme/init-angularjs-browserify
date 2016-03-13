(function() {
    'use strict'
    
    require('angular-ui-router');

    module.exports = angular

      .module('anbfy.routes', ['ui.router'])
      
          .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
            
            $urlRouterProvider.otherwise('/');

            $stateProvider
              .state('home', {
                url: '/',
                templateUrl: 'app/components/home/home.view.html',
                controller: 'HomeController',
                controllerAs: 'content'
              });
          });
})();
