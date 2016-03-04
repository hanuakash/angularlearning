(function () {
    var dirOne = angular.module("myApp").directive("dirOne", function () {
        return {
            restrict: "E",
            replace: false,
            scope: true,
            templateUrl: "/ng/templates/dir-one.html",
            controller: function ($scope) {
                console.log("from inside the dirOne:..");
                console.debug($scope.user.alias);
                console.debug($scope.message);
            },
            link: function (scope, elem, attrs, ctroller) { }
        }
    });
    var dirTwo = angular.module("myApp").directive("dirTwo", function () {
        return {
            restrict: "E",
            replace: false,
            scope: false,
            templateUrl: "/ng/templates/dir-two.html",
            controller: function ($scope) {
                console.log("from inside the dirTwo:..");
                console.debug($scope.user.alias);
                console.debug($scope.message);
            },
            link: function (scope, elem, attrs, ctroller) { }
        }
    });
    var dirThree = angular.module("myApp").directive("dirThree", function () {
        return {
            restrict: "E",
            replace: false,
            scope: {
                user: "=",
                message: "=",
                anyobject:"="
            },
            templateUrl: "/ng/templates/dir-three.html",
            controller: function ($scope) {
                console.log("from inside the dirThree:..");
                console.debug($scope.user.alias);
                console.debug($scope.message);
            },
            link: function (scope, elem, attrs, ctroller) { }
        }
    })
})();
