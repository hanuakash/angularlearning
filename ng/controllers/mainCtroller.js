(function () {
    var mainCtroller = angular.module("myApp").controller("mainCtroller", function ($scope) {
        $scope.message = "Hi, this is from inside the controller";
        $scope.user = {
            email: "niranjan_awati",
            empno: 41993
        };
        $scope.locations = [];
        
    })
})();