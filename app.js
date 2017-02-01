(function () {
    'use strict';

    angular.module('productListDemo', ['ui.router'])

        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("home");

            $stateProvider
                .state('home', {
                    url: "/home",
                    template: "<home />"
                })
                .state('product', {
                    url: "/product/{id:int}",
                    template: "<product />"
                });
        }]);
})();