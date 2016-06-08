(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope, $http) {
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
                //this is where you go and hit the service
                //VERBS:
                //GET
                //PUT
                //PATCH
                //POST
                //DEL
                $http.get("http://localhost:8080/myapi/users/username").then(function (response) {
                    console.log("success response");
                    console.log(response.data);
                    console.log(response.status);
                }, function (response) {
                    console.log("error response");
                    console.log(response.ExceptionMessage);
                    console.log(response.status);
                })
            }
            else {
                $scope.showWarning = true;
                console.log("Better check the username and password");
            }
        }
    })
})();