(function () {
   
    var niranjanTag = angular.module("myApp").directive("niranjanTag", function () {
        return {
            restrict: "EA",
            replace: false,
            scope: {},//this is the isolated scope
            templateUrl: "ng/templates/niranjanTag.html",
            controller: function ($scope) {
                $scope.collapse = true;
                $scope.toggleCollapse = function () {
                    $scope.collapse = !$scope.collapse;
                }
                $scope.contact  = "83909096960"
            },
            transclude:true
        }
    })
})();