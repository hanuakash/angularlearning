﻿(function () {

    var svcEmployee = angular.module("myNgApp").service("svcEmployee", function ($http, $q, $window) {
        var _loggedInUser = null;
        this.loggedInUser = function (value) {
            if (value === undefined) {
                return _loggedInUser ==null ? JSON.parse($window.localStorage["user"]):_loggedInUser;
            }
            else {
                $window.localStorage["user"] = JSON.stringify(value);
                _loggedInUser = value;
            }
        };

        this.GETOfEmail = function (email) {
            var deferred = $q.defer();
            var url = "http://vpunplepun2-01:8085/data/employees.json";
            $http.get(url).then(function (response) {
                deferred.resolve(response.data.employees)
              
            }, function (response) {
                deferred.reject({});
            }); 
            return deferred.promise;

        }
        this.GETAll = function () {
            var deferred = $q.defer();
            var url = "http://vpunplepun2-01:8085/data/employees.json";
            $http.get(url).then(function (response) {
                deferred.resolve(response.data.employees)
            }, function (response) {
                deferred.reject({});
            });
            return deferred.promise;

        }
    })

})();