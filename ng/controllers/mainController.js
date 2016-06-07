(function () {
    angular.module("myApp").controller("mainController", function ($scope) {
        $scope.message = "Hi there , from inside the controller";
        $scope.someMessage = "this is some message from inside the controller";

    })
})()