(function () {
    var loginController = angular.module("myApp").controller("loginController", function (svcEmployee, $scope, $http) {
        console.info("we are inside the login controller");
        $scope.username = "";
        $scope.password = "";
        var verify = function (data) {
            //compare
        }
        $scope.login = function () {
            var url = "http://localhost:8080/api/users/" + $scope.username ;
            svcEmployee.getOfUserName($scope.username).then(function (data) {
                verify(data);
                console.log("we have received the data from the server");
            }, function (data) {
                console.error("server error");
            });
           
            //can you do the verification here ?

        }
    })
})();