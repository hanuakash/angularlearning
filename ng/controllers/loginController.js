(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope, svcWebapi) {
        $scope.showWarning = false;
        $scope.userInfo = {
            username: "",
            password:""
        };
        var validated = function () {
            return $scope.userInfo.username !== "" && $scope.userInfo.password !== "" ? true : false;
        }
        $scope.login = function () {
            if (validated() == true) {
                $scope.showWarning = false;
                console.log("We are ready to login and hit the webservice");
                svcWebapi.getUser($scope.userInfo.username, $scope.userInfo.password).then(function (data) {
                    console.log(data);
                }, function (data) {
                    console.error(data);
                });
            }
            else {
                $scope.showWarning = true;
                console.log("Better check the username and password");
            }
        }
    })
})();