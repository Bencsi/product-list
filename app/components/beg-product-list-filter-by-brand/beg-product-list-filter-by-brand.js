(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('begProductListFilterByBrandController', [begProductListFilterByBrandController])
        .component('begProductListFilterByBrand', {
            require: {begProductList: '^^'},
            templateUrl: './app/components/beg-product-list-filter-by-brand/beg-product-list-filter-by-brand.html',
            controller: 'begProductListFilterByBrandController',
            controllerAs: 'vm',
            bindings: {
            }
        });

    function begProductListFilterByBrandController() {
        /* jshint validthis: true */
        var vm = this;

        vm.$onInit = function () {
            vm.brands = initBrands();
            vm.selectedBrands = {};
            for(var i = 0; i<vm.brands.length;i++){
                vm.selectedBrands[vm.brands[i]] = true;
            }
        };



        vm.addRemoveFilterFunction = function () {
            vm.begProductList.addRemoveFilterFunction(filterFunc, true);
        };


        var filterFunc = function byBrandFilterFunc(product) {
            var matchBrand = false;
            angular.forEach(vm.selectedBrands,function (val, key) {
                if(product.brand == key && val){
                    matchBrand = true;
                }
            });
            return matchBrand;
        };

        function initBrands() {
            var brands = [];
            var brand;
            for (var i = 0; i < vm.begProductList.products.length; i++) {
                brand = vm.begProductList.products[i].brand;
                if (brands.indexOf(brand) === -1) {
                    brands.push(brand);
                }
            }
            return brands;
        }
    }
})();