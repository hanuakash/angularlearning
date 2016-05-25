(function () {
    var svcWebServer = angular.module("myApp").service("svcWebServer", function ($http, $q) {
        this.loginUser = function (username, password) {
            var deferred = $q.defer();
            var url = "";//"http://localhost:8080/webapi/" + $scope.user.username + "/" + $scope.user.password;
            $http.get(url).then(function (response) {
                console.log("success");
                console.log(response.status);
                console.log(response.data);
                deferred.resolve(response.data);
            }, function (response) {
                console.log("failure");
                console.log(response.status);
                console.log(response.ExceptionMessage);
                deferred.reject(response.data);
            });

            return deferred.promise;
        }
    })
})();