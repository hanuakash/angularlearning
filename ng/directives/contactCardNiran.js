(function () {
    var contactCardNiran = angular.module("myApp").directive("contactCardNiran", function () {
        return {
            restrict: "E",
            replace: false,
            scope: {},
            templateUrl: "/ng/templates/ccniran.html",
            controller: function ($scope) {
                $scope.collapse = false;
                $scope.toggleCollapse = function () {
                    $scope.collapse = !$scope.collapse;
                }
            }
        }
    })
})();