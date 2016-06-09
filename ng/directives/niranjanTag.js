(function () {
    var niranjanTag = angular.module("myApp").directive("niranjanTag", function () {
        return {
            restrict: "E",
            replace: false,
            scope: {},
            templateUrl:"ng/templates/niranjanTag.html"
        }
    })
})();