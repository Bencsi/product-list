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

        vm.addFilterParam = function () {
            vm.begProductList.addFilterParam(makeFilterParam());
        };

        function makeFilterParam() {
            return {isNew: vm.begIsNew};
        }

    }
})();