(function () {
    angular.module("myApp").controller("loginCtroller", function ($scope) {
        $scope.message = "This is Hi from inside the controller"
        $scope.user = {
            alias: "niranjan",
            empno:41993
        }
    })
})();