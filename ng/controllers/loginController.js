(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope) {
       
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
                console.log("validation is complete");
                console.log("we are ready to make a http calls");
            }
            else {
                console.error("the validation has failed");
            }
        }
       
    })
})();