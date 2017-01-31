(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('begDashboardController', [begDashboardController])
        .component('dashboard', {
            templateUrl: './app/pages/dashboard/dashboard.html',
            controller: 'begDashboardController',
            controllerAs: 'vm'
        });

    function begDashboardController() {
        /* jshint validthis: true */
        var vm = this;
    }
})();