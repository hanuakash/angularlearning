(function () {
    var testController = angular.module("myApp").controller("testController", function ($scope) {
        $scope.user = {
            alias:"Niranjan"
        }
        $scope.message = "This is hi from inside the controller";
        $scope.onClickSomething = function (something) {
            console.log("something is clicked.. " + something);
        }
    })
})();
