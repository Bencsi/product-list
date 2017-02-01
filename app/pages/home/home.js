(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('begHomeController', [begHomeController])
        .component('home', {
            templateUrl: './app/pages/home/home.html',
            controller: 'begHomeController',
            controllerAs: 'vm'
        });

    function begHomeController() {
        /* jshint validthis: true */
        var vm = this;
    }
})();