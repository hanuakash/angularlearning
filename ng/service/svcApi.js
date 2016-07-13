(function () {
    var svcApi = angular.module("myApp").service("svcApi", function ($http, $q, $timeout) {
        this.getUserDetails = function () {
            var deferred = $q.defer();
            //url = "http://digitaloceandroplets.com/apps/employees/" + $scope.user.email + "/" + $scope.user.password;
            //$http.get(url).then(function (response) {
            //    //this is wehre the success function executes
            //    console.debug(response.data);
            //    deferred.resolve(response.data)
            //}, function (response) {
            //    //this si where the error function executes
            //    deferred.reject(response.data);
            //});
            $timeout(function () {
                deferred.resolve({message:"Hi there this is from inside the service"});
            }, 5000)
            return deferred.promise;
        }
       
    })
})();