(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('begProductListFilterIsNewController', [begProductListFilterIsNewController])
        .component('begProductListFilterIsNew', {
            require: {begProductList: '^^'},
            templateUrl: './app/components/beg-product-list-filter-is-new/beg-product-list-filter-is-new.html',
            controller: 'begProductListFilterIsNewController',
            controllerAs: 'vm',
            bindings: {
                begIsNew: '<'
            }
        });

    function begProductListFilterIsNewController() {
        /* jshint validthis: true */
        var vm = this;

        vm.addRemoveFilterFunction = function () {
            if (vm.begIsNew) {
                vm.begProductList.addRemoveFilterFunction(filterFunc, true);
            } else {
                vm.begProductList.addRemoveFilterFunction(filterFunc);
            }

        };

        var filterFunc = function isNewFunc(product) {
            return product.isNew === vm.begIsNew;
        };
    }
})();