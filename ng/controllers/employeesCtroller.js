(function () {
    var employeesCtroller = angular.module("myApp").controller("employeesCtroller", function ($scope, svcApi) {
        $scope.employees = [];
        svcApi.employeesList().then(function (data) {
            console.table(data);
            $scope.employees = data;
        }, function () { })
    })
})();