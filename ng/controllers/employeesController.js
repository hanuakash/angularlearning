(function () {
    var employeesController = angular.module("myApp").controller("employeesController", function ($scope) {

        $scope.btnDisable = false;
        $scope.doneSaving = false;

        $scope.employees = [
            { empno: 1, email: "person_1", alias: "person1", location: "pune", role: "developer", sel:false},
            { empno: 2, email: "person_2", alias: "person2", location: "pune", role: "developer", sel:false },
            { empno: 3, email: "person_3", alias: "person3", location: "pune", role: "developer", sel: false },
            { empno: 4, email: "person_4", alias: "person4", location: "pune", role: "validator", sel: false },
            { empno: 5, email: "person_5", alias: "person5", location: "pune", role: "cloudmanager", sel: false },
            { empno: 6, email: "person_6", alias: "person6", location: "pune", role: "DBA", sel: false },
            { empno: 7, email: "person_7", alias: "person7", location: "pune", role: "database engineer", sel: false },
            { empno: 8, email: "person_8", alias: "person8", location: "pune", role: "statistician", sel: false },
            { empno: 9, email: "person_9", alias: "person9", location: "pune", role: "hardware engineer", sel: false },
            { empno: 10, email: "person_10", alias: "person10", location: "pune", role: "manager", sel: false },
        ];
        $scope.saveChanges = function () {
            var allEmployeesChanged = $scope.employees.filter(function (el, ix) {
                return el.sel == true;
            });
            //here we ready to send this to the http service
            //HTTPGET : http://locahost:8080/api/employees/pune

            //HTTPPUT : payload
            //HTTPPATCH : payload

            //HTTPPOST :payload

            //HTTPDEL

            var emailsToDelete = allEmployeesChanged.map(function ( el,ix) {
                return el.email;
            })
            console.table(allEmployeesChanged);
            console.table(emailsToDelete);
            console.log("we are ready to make the changes");
            $scope.doneSaving = true;
        }
        $scope.$watch("doneSaving", function (after, before) {
            if (after == true) {
                $scope.btnDisable = true;
            }
            else {
                $scope.btnDisable = false;
            }
        })
    })
})();//IIFE