(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('begProductListFilterPriceRangeController', [begProductListFilterPriceRangeController])
        .component('begProductListFilterPriceRange', {
            require: {begProductList: '^^'},
            templateUrl: './app/components/beg-product-list-filter-price-range/beg-product-list-filter-price-range.html',
            controller: 'begProductListFilterPriceRangeController',
            controllerAs: 'vm',
            bindings: {
                begName: '<'
            }
        });

    function begProductListFilterPriceRangeController() {
        /* jshint validthis: true */
        var vm = this;

        vm.$onInit = function () {
            vm.begProductList.products.reduce(function(prev, curr) {
                    vm.minPrice = prev.price < curr.price ? prev.price : curr.price;
                    vm.maxPrice = prev.price > curr.price ? prev.price : curr.price;
            });
            vm.slider = {
                min: vm.minPrice,
                max: vm.maxPrice,
                options: {
                    floor: 0,
                    ceil: 450
                }
            };
        };

        vm.addFilterParam = function () {
            vm.begProductList.addFilterParam(makeFilterParam());
        };

        function makeFilterParam() {
            return {name: vm.begName};
        }

    }
})();