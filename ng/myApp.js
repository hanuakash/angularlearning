
(function () {
    var myApp = angular.module("myApp", ["ngRoute"]).config(function ($routeProvider) {
        $routeProvider
        .when("/login", { templateUrl: "ng/views/login.html", controller: "loginController" })
        .when("/settings", { templateUrl: "ng/views/settings.html", controller: "" })
        .when("/employees", { templateUrl: "ng/views/employees.html", controller: "employeesController" })
        .otherwise({ redirectTo: "/login" })
    });
})();
