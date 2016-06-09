(function () {
    var employeesController = angular.module("myApp").controller("employeesController", function ($scope) {
        
        $scope.employees = [
            { empno: 41993, email: "niranjan_awati", alias: "Niranjan", location: "Pune", du: "ETA", sel:false },
            { empno: 41992, email: "vsdgfdgdg", alias: "Niranjan", location: "Pune", du: "ETA", sel: false },
            { empno: 41994, email: "niranjan_agwati", alias: "Niranjan", location: "Pune", du: "ETA", sel: false },
            { empno: 41995, email: "gfdgfdg", alias: "Niranjan", location: "Pune", du: "ETA", sel: false },
            { empno: 41996, email: "gdfgdf", alias: "Niranjan", location: "Pune", du: "ETA", sel: false },
            { empno: 41997, email: "dfgfdg", alias: "Niranjan", location: "Pune", du: "ETA", sel: false },
            { empno: 41998, email: "fgdgdf", alias: "Niranjan", location: "Pune", du: "ETA", sel: false },
            { empno: 41950, email: "gdfg", alias: "Niranjan", location: "Pune", du: "ETA", sel: false },
            { empno: 41967, email: "gfdgd", alias: "Niranjan", location: "Pune", du: "ETA", sel: false },
            { empno: 41987, email: "gfdgdfsdfdsfd", alias: "Niranjan", location: "Pune", du: "ETA", sel: false },
        ];

        $scope.saveChanges = function () {
            //here we are trying to get all the emps that are selected
            var selected = $scope.employees.filter(function (el, index) {
                return el.sel == true;
            });
            console.table(selected);
        }
        
        $scope.toggleSelectRow = function (e) {
            e.sel = !e.sel;
        }
    })
})();