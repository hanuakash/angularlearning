(function () {
    var myApp = angular.module("myApp", ["ngRoute"]).config(function ($routeProvider) {
        $routeProvider
        .when("/", { templateUrl: "/ng/views/login.html", controller: "" })
        .when("/login", { templateUrl: "/ng/views/login.html", controller: "" })
        .when("/reportees", { templateUrl: "/ng/views/reportees.html", controller: "" })
        .otherwise({ redirectTo: "/login" })
    })
})();