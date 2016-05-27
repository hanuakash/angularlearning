(function () {
    var busyGui = angular.module("myApp").directive("busyGui", function () {
        return {
            restrict: "E",
            replace: true,
            scope: {},
            controller: function ($scope, $rootScope) {
                $scope.animation = false;

                $rootScope.$on("busy", function (evt, data) {
                    $scope.animation = true;
                })
                $rootScope.$on("done", function (evt, data) {
                    $scope.animation = false;
                })

            },
            templateUrl: "/ng/templates/busyGui.html",
            transclude: true,

        }
    })
})()