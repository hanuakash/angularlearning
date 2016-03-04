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
                //$scope.message = "This is hi form inside DirOne";
                //$scope.user = { alias: "Niranjan Vijay Awati" };
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
                $scope.message = "this is the dirThree speaking";
                $scope.user = {alias:"new name"}
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
                anyobject: "=",
                onCall: "&"
            },
            templateUrl: "/ng/templates/dir-three.html",
            controller: function ($scope) {
                console.log("from inside the dirThree:..");
                console.debug($scope.user.alias);
                console.debug($scope.message);
                console.log("we are ready to call the fn on the parent scope");
                var message = "thi is a test message";
                $scope.onCall({ something: message });
               
            },
            link: function (scope, elem, attrs, ctroller) { }
        }
    });
    var levelOne = angular.module("myApp").directive("levelOne", function () {
        return {
            restrict: "E",
            replace: false,
            transclude: true,
            template: "<div ng-transclude></div>",
            scope: {},
            controller: function ($scope) {
                console.log("levelOne:controller");
            },
            //link:function (scope, elem, attrs) {

            //},
            compile: function (telem, tattrs) {
                console.log("levelOne:compile");
                return {
                    pre: function (scope, elem, attrs) {
                        console.log("levelOne:pre");
                    },
                    post: function (scope, elem, attrs) {
                        console.log("levelOne:post");
                    }
                }
            }
        }
    });
    var levelTwo = angular.module("myApp").directive("levelTwo", function () {
        return {
            restrict: "E",
            replace: false,
            transclude: true,
            template: "<div ng-transclude></div>",
            scope: {},
            controller: function ($scope, $rootScope) {
                console.log("levelTwo:controller");
               
            },
            //link:function (scope, elem, attrs) {

            //},
            compile: function (telem, tattrs) {
                console.log("levelTwo:compile");
                return {
                    pre: function (scope, elem, attrs) {
                        console.log("levelTwo:pre");
                    },
                    post: function (scope, elem, attrs) {
                        console.log("levelTwo:post");
                    }
                }
            }
        }
    });
    var levelThree = angular.module("myApp").directive("levelThree", function () {
        return {
            restrict: "E",
            replace: false,
            transclude: true,
            template: "<div ng-transclude></div>",
            scope: {},
            controller: function ($scope, $rootScope) {
                console.log("levelThree:controller");
                $rootScope.$on("header-clicked", function (evt, evtParams) {
                    console.log("we have received the header click event..");
                    console.debug(evtParams);
                })
            },
            //link:function (scope, elem, attrs) {

            //},
            compile: function (telem, tattrs) {
                console.log("levelThree:compile");
                return {
                    pre: function (scope, elem, attrs) {
                        console.log("levelThree:pre");
                    },
                    post: function (scope, elem, attrs) {
                        console.log("levelThree:post");
                    }
                }
            }
        }
    })
})();
