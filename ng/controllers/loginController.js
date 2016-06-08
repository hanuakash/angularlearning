(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope) {
        $scope.userInfo = {
            username: "",
            password:""
        };
        $scope.login = function () {
            console.log("ARIZONA!!!");
            console.log($scope.userInfo.username);
            console.log($scope.userInfo.password);
        }
    })
})();