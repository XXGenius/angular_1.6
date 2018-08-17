'use strict';

angular.module('myApp.bucket', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/bucket', {
            templateUrl: 'bucket/bucket.html',
            controller: 'bucketCtrl'
        });
    }])


    .controller('bucketCtrl', function PhoneListController($scope) {
        $scope.products = [];
        if (localStorage.getItem('data')) {
            $scope.products = JSON.parse(localStorage.getItem('data'));
        } else {
            $scope.errorbucket = true;
        }

        $scope.delete = function (id) {
            var i;
            for (i = 0; i < $scope.products.length; i++) {
                if ($scope.products[i].id === id) {
                    $scope.products.splice(i, 1);
                }
            }
            localStorage.setItem('data', JSON.stringify(this.products))
        }
    });
