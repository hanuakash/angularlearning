(function () {
    var isoTest = angular.module("myApp").directive("isoTest", function () {
        return {
            restrict: "E",
            replace: false,
            scope: {},
            templateUrl: "ng/templates/test.html",
            controller: function ($scope) {
                //$scope.user.email = "kneerunjun@gmail.com"
                //$scope.user.empno = 1,
                //$scope.user.location ="Pune city"
            },
        }
    })
    var inheritTest = angular.module("myApp").directive("inheritTest", function () {
        return {
            restrict: "E",
            replace: false,
            scope:true,
            templateUrl: "ng/templates/test.html",
            controller: function ($scope) {
               
            }
        }
    })
    var sharedTest = angular.module("myApp").directive("sharedTest", function () {
        return {
            restrict: "E",
            replace: false,
            scope:false,
            templateUrl: "ng/templates/test.html",
            controller: function ($scope) {
                $scope.user = {
                    email: "kneerunjun@gmail.com",
                    empno: 1,
                    location: "Pune City"
                }
            }
        }
    })
})();