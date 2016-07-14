(function () {
    angular.module("myApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
        .when("/", { templateUrl: "ng/views/login.html", controller: "" })
        .when("/login", { templateUrl: "ng/views/login.html", controller: "" })
        .when("/settings", { templateUrl: "ng/views/settings.html", controller: "" })
        .when("/employees", { templateUrl: "ng/views/employees.html", controller: "employeesCtroller" })
        .when("/test", { templateUrl: "ng/views/test.html", controller: "testCtroller" })
        .otherwise({redirectTo:"/"})
    })
})(); //IIFE - immediately invoked fucntion expression