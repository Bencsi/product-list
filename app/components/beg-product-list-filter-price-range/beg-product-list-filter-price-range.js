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
            initPriceRanges();
            initSlider();
        };

        vm.addRemoveFilterFunction = function () {
            vm.begProductList.addRemoveFilterFunction(filterFunc, true);
        };

        var filterFunc = function priceRangeFunc(product) {
            return product.price >= vm.begPriceRangeSlider.min && product.price <=vm.begPriceRangeSlider.max;
        };

        function initPriceRanges() {
            vm.minPrice = vm.begProductList.products[0].price;
            vm.maxPrice = vm.begProductList.products[0].price;
            for (var i = 1; i < vm.begProductList.products.length; i++) {
                vm.minPrice = vm.begProductList.products[i].price < vm.minPrice ? vm.begProductList.products[i].price : vm.minPrice;
                vm.maxPrice = vm.begProductList.products[i].price > vm.maxPrice ? vm.begProductList.products[i].price : vm.maxPrice;
            }
        }

        function initSlider() {
            vm.begPriceRangeSlider = {
                min: vm.minPrice,
                max: vm.maxPrice,
                options: {
                    floor: vm.minPrice,
                    ceil: vm.maxPrice,
                    onChange: function() {
                        vm.addRemoveFilterFunction();
                    }
                }
            };
        }

    }
})();