(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('begProductListFilterNameController', [begProductListFilterNameController])
        .component('begProductListFilterName', {
            require: {begProductList: '^^'},
            templateUrl: './app/components/beg-product-list-filter-name/beg-product-list-filter-name.html',
            controller: 'begProductListFilterNameController',
            controllerAs: 'vm',
            bindings: {
                begName: '<'
            }
        });

    function begProductListFilterNameController() {
        /* jshint validthis: true */
        var vm = this;

        vm.addRemoveFilterFunction = function () {
            console.log(vm.begProductList.filterFunctions);
            if (vm.begName.length === 0) {
                vm.begProductList.addRemoveFilterFunction(filterFunc);
            } else {
                vm.begProductList.addRemoveFilterFunction(filterFunc, true);
            }

        };

        var filterFunc = function nameFunc(product) {
            if (product.name.toLowerCase().search(vm.begName.toLowerCase()) != -1) {
                return true;
            }
        };
    }
})();