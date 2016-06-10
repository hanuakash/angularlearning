(function () {
    var niranjanDetails = angular.module("myApp").directive("niranjanDetails", function () {
        return {
            restrict: "E",
            scope: {},//this is what is called as isolated scope
            templateUrl: "ng/templates/niranjanDetails.html",
            controller: function ($scope) {

            }
        }
    })
})()