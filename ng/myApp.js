//dependent modules go in that array, else empty

(function () {
    angular.module("myApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
        .when("/", { templateUrl: "/ng/views/login.html", controller: "" })
        .when("/login", { templateUrl: "/ng/views/login.html", controller: "" })
        .when("/settings", { templateUrl: "/ng/views/settings.html", controller: "" })
        .otherwise({redirectTo:"/"})
    })
})() //IIFE - immediately invoked function expression
