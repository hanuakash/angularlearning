(function () {
    var svcEmployee = angular.module("myApp").service("svcEmployee", function ($q, $timeout) {
        this.getOfUserName = function (username) {
            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve({});
            }, 3500)

            //$http.get(url).then(function (response) {
            //    console.info("200 ok ..");
            //    deferred.resolve(response.data);
            //}, function (response) {
            //    console.info("500 : internal server error");
            //    deferred.reject({});
            //});
            return deferred.promise;

        }
    })
})();