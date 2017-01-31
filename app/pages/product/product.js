(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('begProductController', ['$state', 'repository', begProductController])
        .component('product', {
            templateUrl: './app/pages/product/product.html',
            controller: 'begProductController',
            controllerAs: 'vm'
        });

    function begProductController($state, repository) {
        /* jshint validthis: true */
        var vm = this;

        vm.$onInit = function () {
            repository.getProduct($state.params.id).then(function (response) {
                vm.product = response.data;
            });
        };
    }
})();