(function () {
    'use strict';

    angular
        .module('productListDemo')
        .factory('repository', ['$http', repository]);

    function repository($http) {
        var publicMethods = {
            getProduct: getProduct,
            getProducts: getProducts
        };

        function getProduct(id) {
            return $http.get('http://localhost:8080/api/product', {
                params: {id: id}
            });
        }

        function getProducts() {
            return $http.get('http://localhost:8080/api/products');
        }

        return publicMethods;
    }
})();