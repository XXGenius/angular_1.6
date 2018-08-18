'use strict';

angular.module('myApp.basket', ['ngRoute', 'catalog.service'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/basket', {
            templateUrl: 'components/views/basket.html',
            controller: 'basketCtrl'
        });
    }])


    .controller('basketCtrl', function PhoneListController($scope, $getBasket, $removeProductFromBasket) {
        $scope.products = this;

        getListProductsFromBasket();

        function getListProductsFromBasket() {
            $scope.products = $getBasket();
        }

        $scope.removeProduct = function (product) {
            $removeProductFromBasket(product.id);
            getListProductsFromBasket();
        };

    });
