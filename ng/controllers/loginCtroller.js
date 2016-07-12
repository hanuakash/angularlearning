(function () {
    angular.module("myApp").controller("loginCtroller", function ($scope, $location) {
        $scope.message = "This is Hi from inside the controller"
        $scope.user = {
            alias: "niranjan",
            empno: 41993
        };
        $scope.clicked = function () {
            $location.url("/settings")
        }
    })
})();