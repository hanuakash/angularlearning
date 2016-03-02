(function () {
    var myApp = angular.module("myApp", ["ngRoute"]).config(function ($routeProvider) {
        $routeProvider
        .when("/", { templateUrl: "/ng/views/login.html", controller: "loginController" })
        .when("/login", { templateUrl: "/ng/views/login.html", controller: "loginController" })
        .when("/reportees", { templateUrl: "/ng/views/reportees.html", controller: "" })
        .otherwise({ redirectTo: "/login" })
    })
})();