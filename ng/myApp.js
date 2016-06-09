//dependent modules go in that array, else empty

(function () {
    angular.module("myApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
        .when("/", { templateUrl: "/ng/views/login.html", controller: "loginController" })
        .when("/login", { templateUrl: "/ng/views/login.html", controller: "loginController" })
        .when("/settings", { templateUrl: "/ng/views/settings.html", controller: "" })
        .when("/employees", { templateUrl: "/ng/views/employees.html", controller: "employeesController" })
        .otherwise({redirectTo:"/"})
    })
})() //IIFE - immediately invoked function expression
