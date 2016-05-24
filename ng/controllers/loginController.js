(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope) {
       

        //this is yet another way of thinkin
        $scope.user = {
            username: "",
            password:""
        }
        $scope.login = function () {
            console.debug($scope.user.username);
            console.debug($scope.user.password);
            console.log("we are ready to login the user");
        }
       
    })
})();