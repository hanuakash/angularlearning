(function () {
    var myFrame = angular.module("myApp").directive("myFrame", function () {
        return {
            restrict: "E",
            replace: true,
            scope: {

            },
            transclude:true,
            templateUrl:"/ng/templates/my-frame.html",
            controller: function ($scope) { },
            link: function (scope, elem, attrs, ctroller) { }
        }
    })
})();
