(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope, $http) {
       
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
                var url = "";//"http://localhost:8080/webapi/" + $scope.user.username + "/" + $scope.user.password;
                $http.get(url).then(function (response) {
                    console.log("success");
                    console.log(response.status);
                    console.log(response.data);
                }, function (response) {
                    console.log("failure");
                    console.log(response.status);
                    console.log(response.ExceptionMessage);
                });
              
                console.log("this is on the main thread .. ");
            }
            else {
                console.error("the validation has failed");
            }
        }
       
    })
})();