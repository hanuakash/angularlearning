(function () {
    angular.module("myApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
        .when("/", { templateUrl: "ng/views/login.html", controller: "loginCtroller" })
        .when("/login", { templateUrl: "ng/views/login.html", controller: "loginCtroller" })
        .when("/settings", { templateUrl: "ng/views/settings.html", controller: "" })
        .when("/employees", { templateUrl: "ng/views/employees.html", controller: "" })
        .otherwise({redirectTo:"/"})
    })
})(); //IIFE - immediately invoked fucntion expression