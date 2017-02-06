(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('begProductListController', ['repository', begProductListController])
        .component('begProductList', {
            transclude: true,
            templateUrl: './app/components/beg-product-list/beg-product-list.html',
            controller: 'begProductListController',
            controllerAs: 'vm',
            bindings: {
                begLimit: '<'
            }
        });

    function begProductListController(repository) {
        /* jshint validthis: true */
        var vm = this;

        vm.$onInit = function () {
            repository.getProducts().then(function (response) {
                vm.products = vm.begLimit ? response.data.slice(0, vm.begLimit) : response.data;
            });
            vm.filterParams = {};
        };

        vm.addFilterParam = function (param) {
            vm.filterParams = Object.assign(vm.filterParams, param);
        };
    }
})();