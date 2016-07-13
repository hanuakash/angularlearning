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
            }, 1700)
            return deferred.promise;
        }
        this.employeesList = function () {
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve([
                    { empno: 1, email: "person1@abc.com", location: "pune", project: "ASDSAD" },
                    { empno: 2, email: "person2@abc.com", location: "mysore", project: "KJJKJ" },
                    { empno: 3, email: "person3@abc.com", location: "bangalore", project: "ASDSAD" },
                    { empno: 4, email: "person4@abc.com", location: "mysore", project: "ASDSAD" },
                    { empno: 5, email: "person5@abc.com", location: "chandigarh", project: "KJJKJ" },
                    { empno: 6, email: "person6@abc.com", location: "bangalore", project: "ASDSAD" },
                ]);
            }, 1700)
            return deferred.promise;
        }
    })
})();