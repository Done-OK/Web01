//Module
var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    $scope.cars = [
        { id: 'car01', name: 'BMW', color: 'red' },
        { id: 'car02', name: 'Mercedes', color: 'white' },
        { id: 'car03', name: 'Audi', color: 'black' }
    ];

    $scope.carInforStatus = true;
    $scope.changeCarInforStatus = function () {
        if ($scope.carInforStatus) {
            $scope.carInforStatus = false;
        }
        else {
            $scope.carInforStatus = true;
        }
    }
});

