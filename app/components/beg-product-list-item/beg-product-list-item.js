(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('begProductListItemController', ['repository', begProductListItemController])
        .component('begProductListItem', {
            templateUrl: './app/components/beg-product-list-item/beg-product-list-item.html',
            controller: 'begProductListItemController',
            controllerAs: 'vm',
            bindings: {
                begData: '<'
            }
        });

    function begProductListItemController() {
        /* jshint validthis: true */
        var vm = this;
    }
})();