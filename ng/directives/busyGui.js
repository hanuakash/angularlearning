(function () {
    var busyGui = angular.module("myApp").directive("busyGui", function () {
        return {
            restrict: "A",
            replace: true,
            scope: {},
            controller: function ($scope, $rootScope) {

                console.log("we are inside the controller");
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
           
            compile: function (tElem, tAttr) {
                console.log("we are inside the compile function");
                return {
                    pre: function (scope, ele, attrs) {
                        console.log("we are inside the pre function");
                    },
                    post: function (scope, ele, attrs) {
                        console.log("we are inside the post function");
                    }
                }
            }
        }
    })
})()