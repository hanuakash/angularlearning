(function () {
    var levelOne = angular.module("myApp").directive("levelOne", function () {
        return {
            restrict: "E",
            scope: {},
            controller: function ($scope, $rootScope) {
                $scope.message = "";
                $rootScope.$on("ping", function (evt, data) {
                    $scope.message = data.message;
                });
                
            },
            templateUrl: "ng/templates/levelOne.html",
            transclude: true,
            compile: function (telem, tattrs) {
                console.log("level-one:we are inside the compile function");
                return {
                    pre: function (scope, elem,attrs) {
                        console.log("level-one:we are inside the pre function");
                    },
                    post: function (scope,elem, attrs) {
                        console.log("level-one:we are inside the post function");
                    }
                }
            },
        }
    });
    var levelTwo = angular.module("myApp").directive("levelTwo", function () {
        return {
            restrict: "E",
            scope: {},
            template:"<div></div>",
            controller: function ($scope) {
                console.log("level-two:we are inside the controller");
            },
            compile: function (telem, tattrs) {
                console.log("level-two:we are inside the compile function");
                return {
                    pre: function (scope, elem, attrs) {
                        console.log("level-two:we are inside the pre function");
                    },
                    post: function (scope, elem, attrs) {
                        console.log("level-two:we are inside the post function");
                    }
                }
            },
        }
    });
})();