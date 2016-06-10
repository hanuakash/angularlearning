(function () {
    var levelOne = angular.module("myApp").directive("levelOne", function () {
        return {
            restrict: "E",
            scope: true, //inherited scope
            controller: function ($scope) {
                $scope.user = { alias: "niranjan awati" };
            },
            templateUrl:"ng/templates/levelOne.html"
        }
    })
})();