(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('begProductController', ['$stateParams', 'repository', begProductController])
        .component('product', {
            templateUrl: './app/pages/product/product.html',
            controller: 'begProductController',
            controllerAs: 'vm'
        });

    function begProductController($stateParams, repository) {
        /* jshint validthis: true */
        var vm = this;

        vm.$onInit = function () {
            repository.getProduct($stateParams.id).then(function (response) {
                vm.product = response.data;
            });
        };
    }
})();