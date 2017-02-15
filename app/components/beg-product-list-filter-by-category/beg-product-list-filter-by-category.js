(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('begProductListFilterByCategoryController', [begProductListFilterByCategoryController])
        .component('begProductListFilterByCategory', {
            require: {begProductList: '^^'},
            templateUrl: './app/components/beg-product-list-filter-by-category/beg-product-list-filter-by-category.html',
            controller: 'begProductListFilterByCategoryController',
            controllerAs: 'vm',
            bindings: {}
        });

    function begProductListFilterByCategoryController() {
        /* jshint validthis: true */
        var vm = this;

        vm.$onInit = function () {
            vm.categories = initCategories();
            vm.selectedCategories = {};
            for (var i = 0; i < vm.categories.length; i++) {
                vm.selectedCategories[vm.categories[i]] = true;
            }
        };

        vm.addRemoveFilterFunction = function () {
            vm.begProductList.addRemoveFilterFunction(filterFunc, true);
        };


        var filterFunc = function byCategoryFilterFunc(product) {
            var matchCategory = false;
            angular.forEach(vm.selectedCategories, function (val, key) {
                if (product.category == key && val) {
                    matchCategory = true;
                }
            });
            return matchCategory;
        };

        function initCategories() {
            var categories = [];
            var category;
            for (var i = 0; i < vm.begProductList.products.length; i++) {
                category = vm.begProductList.products[i].category;
                if (categories.indexOf(category) === -1) {
                    categories.push(category);
                }
            }
            return categories;
        }
    }
})();