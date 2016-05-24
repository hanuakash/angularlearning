(function () {
    var myApp = angular.module("myApp", ["ngRoute"]).config(function ($routeProvider) {
        $routeProvider
        .when("/login", { templateUrl: "ng/views/login.html", controller: "loginController" })
        .when("/settings", { templateUrl: "ng/views/settings.html", controller: "" })
        .otherwise({redirectTo:"/login"})
    });
})();//IIFE - immediately invoked function expression