(function () {
    var settingsController = angular.module("myApp").controller("settingsController", function ($scope, $rootScope) {
        $scope.user = {
            alias: "niranjan",
            location: "Pune",
            empno:41993
        }
        $scope.sendEvent = function () {
            $rootScope.$broadcast("ping", { message: "this is hi from inside the controller" });
        }
    })
})();