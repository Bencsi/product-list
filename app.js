(function () {
    'use strict';

    angular.module('productListDemo', ['ui.router'])

        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("dashboard");

            $stateProvider
                .state('dashboard', {
                    url: "/dashboard",
                    template: "<dashboard />"
                })
                .state('product', {
                    url: "/product/{id:int}",
                    template: "<product />"
                });
        }]);
})();