(function () {
    'use strict';

    angular.module('catalog.service', []);

    angular.module('catalog.service').factory('$getAllProducts', ['$q', '$http', getAllProducts]);
    angular.module('catalog.service').factory('$addProduct', [addProduct]);
    angular.module('catalog.service').factory('$getBasket', [getBasket]);
    angular.module('catalog.service').factory('$removeProductFromBasket', [removeProductFromBasket]);

    function getAllProducts($q, $http) {

        return function () {
            var deferred = $q.defer();

            $http.get('data_products/products.json').then(function (result) {
                console.log(result.data);
                deferred.resolve(result.data.products);
            }, function (error) {
                console.error(error.message);
                deferred.reject(error);
            });
            return deferred.promise;
        }
    }

    function getBasket() {
        return function () {
            return loadBasketFromLocalStorage();
        }
    }

    function addProduct() {
        return function (product) {
            var currentBusket = loadBasketFromLocalStorage();
            var isProductExist = false;

            currentBusket.forEach(function (element) {
                if (element.id === product.id) {
                    isProductExist = true;
                }
            });

            if (!isProductExist) {
                currentBusket.push(product);
                saveBasketFromLocalStorage(currentBusket);
            }
        }
    }

    function removeProductFromBasket() {
        return function (id) {
            var basket = loadBasketFromLocalStorage();

            basket.forEach(function (element, index) {
                if (element.id === id) {
                    basket.splice(index, 1);
                }
            });

            saveBasketFromLocalStorage(basket);
        }
    }

    function loadBasketFromLocalStorage() {
        var basket = localStorage.getItem("basket");
        if (!basket) {
            return [];
        }
        return JSON.parse(basket);
    }

    function saveBasketFromLocalStorage(basket) {
        localStorage.setItem("basket", JSON.stringify(basket));
    }

})();
