(function () {
    'use strict';

    angular.module('productListDemo')
        .controller('begRatingController', ['repository', begRatingController])
        .component('begRating', {
            templateUrl: './app/components/beg-rating/beg-rating.html',
            controller: 'begRatingController',
            controllerAs: 'vm',
            bindings: {
                begData: '<',
                begMax: '<'
            }
        });

    function begRatingController() {
        /* jshint validthis: true */
        var vm = this;

        vm.$onInit = function () {
            vm.range = [];
            for(var i=1; i<=vm.begMax; i++){
                vm.range.push(i);
            }
        };
    }
})();