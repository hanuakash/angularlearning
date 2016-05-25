(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope,  svcWebServer) {
       
        var validation = function () {
            $scope.invalid.username = $scope.user.username.length > 0 ? false : true;
            $scope.invalid.password = $scope.user.password.length > 0 ? false : true;
            return !$scope.invalid.username && !$scope.invalid.password;
        }
        $scope.invalid = {
            username: false,
            password:false
        };
        //this is yet another way of thinkin
        $scope.user = {
            username: "",
            password:""
        }
        $scope.login = function () {
            if (validation() == true) {
                svcWebServer.loginUser($scope.user.username, $scope.user.password).then(function (data) {
                    console.log("login successful");
                }, function (data) {
                    console.log("login failed");
                });
            }
            else {
                console.error("the validation has failed");
            }
        }
       
    })
})();