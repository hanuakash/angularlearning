(function () {
    angular.module("myApp").controller("innerController", function ($scope) {
        $scope.syriaMessage = "Raqqa is ours, ISIL has been repelled!";
        $scope.message = "this is from the inner controller";
    })
})();