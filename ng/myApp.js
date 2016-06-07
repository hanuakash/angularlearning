//dependent modules go in that array, else empty

(function () {
    var myApp = angular.module("myApp", [])
    var mainController = myApp.controller("mainController", function ($scope) {
        $scope.message = "Hi there , from inside the controller";
        $scope.someMessage = "this is some message from inside the controller";

    })
    var innerController = myApp.controller("innerController", function ($scope) {
        $scope.syriaMessage = "Raqqa is ours, ISIL has been repelled!";
        $scope.message = "this is from the inner controller";
    })
})() //IIFE - immediately invoked function expression
