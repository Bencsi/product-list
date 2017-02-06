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

        vm.addFilterParam = function () {
            vm.begProductList.addFilterParam(makeFilterParam());
        };

        function makeFilterParam() {
            return {name: vm.begName};
        }

    }
})();