(function () {
    var contactCard = angular.module("myApp").directive("contactCard", function () {
        return {
            restrict: "E",
            replace: false,
            templateUrl: "ng/templates/contact-card.html",
            scope: {
                title: "=",
            },
            transclude:true,
            controller: function ($scope) {
                $scope.collapsed = true;
                $scope.toggleCollapse = function () {
                    $scope.collapsed = !$scope.collapsed;
                }
            }
        }
    })
})();