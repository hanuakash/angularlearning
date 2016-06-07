//dependent modules go in that array, else empty

(function () {
    var myApp = angular.module("myApp", [])
    var mainController = myApp.controller("mainController", function ($scope) {
        $scope.message = "Hi there , from inside the controller";
    })
})() //IIFE - immediately invoked function expression
