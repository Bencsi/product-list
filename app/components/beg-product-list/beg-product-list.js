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
            vm.filterFunctions = [];
        };

        vm.productFilter = function () {
            return function (product) {
                var showProduct = true;
                for (var i = 0; i < vm.filterFunctions.length; i++) {
                    showProduct *= vm.filterFunctions[i](product);
                }

                return showProduct;
            };


        };

        vm.addRemoveFilterFunction = function (filterFunc, isAdding) {
            if (isAdding) {
                if (vm.filterFunctions.indexOf(filterFunc) === -1) {
                    vm.filterFunctions.push(filterFunc);
                }
            } else {
                var index = vm.filterFunctions.indexOf(filterFunc);
                if (index !== -1) {
                    vm.filterFunctions.splice(index, 1);
                }
            }
        };
    }
})();