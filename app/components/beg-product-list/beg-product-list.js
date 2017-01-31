(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('begProductListController', ['repository', begProductListController])
        .component('begProductList', {
            templateUrl: './app/components/beg-product-list/beg-product-list.html',
            controller: 'begProductListController',
            controllerAs: 'vm',
            bindings: {
                begLimit: '<',
                begOnSelect: '&?'
            }
        });

    function begProductListController(repository) {
        /* jshint validthis: true */
        var vm = this;

        vm.$onInit = function () {
            repository.getProducts().then(function (response) {
                vm.products = response.data;
            });
        };
    }
})();