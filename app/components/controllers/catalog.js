'use strict';

angular.module('myApp.catalog', ['ngRoute', 'catalog.service'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/catalog', {
            templateUrl: 'components/views/catalog.html',
            controller: 'catalogCtrl'
        });
    }])

    .controller('catalogCtrl', function PhoneListController($scope, $getAllProducts, $addProduct) {


        $scope.phones = this;

        initDefault();

        function initDefault() {
            $getAllProducts().then(function (data) {
                $scope.phones = data;
                console.log(data);
            }, function (error) {
                $scope.phones = null;
            })
        }

        $scope.addProduct = function (phone) {
            console.log(phone);
            $addProduct(phone);
        }


    });
