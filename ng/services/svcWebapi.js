(function () {
    var svcWebapi = angular.module("myApp").service("svcWebapi", function ($http, $q) {
        this.getUser = function (username, password) {
            var deferred = $q.defer();

            $http.get("http://localhost:8080/myapi/users/username").then(function (response) {
                console.log("success response");
                deferred.resolve(response.data);
                console.log(response.status);
            }, function (response) {
                console.log("error response");
                deferred.reject(response.ExceptionMessage);
                console.log(response.status);
            });

            return deferred.promise;
        }
    })
})()