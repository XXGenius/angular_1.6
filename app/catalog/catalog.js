'use strict';

angular.module('myApp.catalog', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/catalog', {
            templateUrl: 'catalog/catalog.html',
            controller: 'catalogCtrl'
        });
    }])

    .controller('catalogCtrl', function PhoneListController($scope) {
        $scope.phones = [
            {
                id: 1,
                name: 'Nexus S',
                price: '$1000',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Nexus_S.png/250px-Nexus_S.png'
            },
            {
                id: 2,
                name: 'MOTOROLA XOOM™',
                price: '$1200',
                img: 'https://md3.pricebaba.com/images/product/tablet/3610/motorola-xoom-32gb-3g-wifi-raw.jpg'
            },
            {
                id: 3,
                name: 'IPhone X',
                price: '$1200',
                img: 'https://store.storeimages.cdn-apple.com/4667/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-2017?wid=305&hei=358&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1515602510472'
            },
            {
                id: 4,
                name: 'Samsung S9',
                price: '$999',
                img: 'https://htstatic.imgsmail.ru/torg_pic/20/450x450/model/42d41afb12c93c11ea00d4703f84ba37?src=14473437%2F1.jpg&version=9&hash=0735ac930489c25a7766a3e0b3d97a78'
            },
            {
                id: 5,
                name: 'Xiaomi mi 8',
                price: '$510',
                img: 'https://hotline.ua/img/tx/171/171385495_s265.jpg'
            },
            {
                id: 6,
                name: 'LG K8',
                price: '$130',
                img: 'https://static.svyaznoy.ru/upload/iblock/cff/3015281_0.jpg/resize/483x483/hq/'
            }
        ];

        $scope.selection = [];

        $scope.addBucket = function (id) {
            $scope.phones.forEach(function (phone) {
                if (phone.id === id) {
                    console.log(phone);
                    $scope.selection.push(phone);
                    localStorage.setItem('data', JSON.stringify($scope.selection))
                }
            });
        }
    });
