(function () {
    var svcEmployee = angular.module("myApp").service("svcEmployee", function ($q, $timeout, $http) {
        this.getReporteesOf = function (empno) {
            var deferred = $q.defer();
            var url = "http://localhost:5380/webapi/mock/users/" + empno+ "/reportees"
           
            $http.get(url).then(function (response) {
                console.info("we have received the response from the server" + response.status);
                console.table(response.data);
                deferred.resolve(response.data);
            }, function (response) {
                console.info("500 : internal server error");
                deferred.reject({});
            });
            return deferred.promise;
        }
        this.getOfUserName = function (username) {
            var deferred = $q.defer();
            var url = "http://localhost:5380/webapi/mock" + "/niranjan"
            //$timeout(function () {
            //    deferred.resolve({});
            //}, 1700)

            $http.get(url).then(function (response) {
                console.info("we have received the response from the server" + response.status);
                deferred.resolve(response.data);
            }, function (response) {
                console.info("500 : internal server error");
                deferred.reject({});
            });
            return deferred.promise;

        }
    })
})();