(function () {
    var employeeRow = angular.module("myApp").directive("employeeRow", function () {
        return {
            restrict: "A",
            replace: true,
            templateUrl: "/ng/templates/employee-row.html",
            scope: {
                employee:"="
            }

        }
    })
})();