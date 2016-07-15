(function () {
    var levelOne = angular.module("myApp").directive("levelOne", function () {
        return {
            restrict: "E",
            replace: false,
            template: "<div><button ng-click='fireEvent()'>Event</button></div>",
            scope: {
                fireEvent:"&"
            },
            
            controller: function ($scope, $rootScope) {
                $rootScope.$on("test-event", function (evt, data) {
                    console.log("in level-one");
                    console.log(data.message);
                })
            },
            compile: function (tElem, tAttrs) {
                console.log("levelOne:compiler");
                return {
                    pre: function (scope, elem, attrs) {
                        console.log("levelOne:pre function");
                    },
                    post: function (scope, elem, attrs) {
                        console.log("levelOne:post function");
                    }
                }
            }
        }
    });
    var levelTwo = angular.module("myApp").directive("levelTwo", function () {
        return {
            restrict: "E",
            replace: false,
            template: "<div ng-transclude></div>",
            scope: false,
            transclude:true,
            controller: function ($scope, $rootScope) {
                $rootScope.$on("test-event", function (evt, data) {
                    console.log("in level-two");
                    console.log(data.message);
                })
                console.log("levelTwo:controller");
            },
            compile: function (tElem, tAttrs) {
                console.log("levelTwo:compiler");
                return {
                    pre: function (scope, elem, attrs) {
                        console.log("levelTwo:pre function");
                    },
                    post: function (scope, elem, attrs) {
                        console.log("levelTwo:post function");
                    }
                }
            }
        }
    });
    var levelThree = angular.module("myApp").directive("levelThree", function () {
        return {
            restrict: "E",
            replace: false,
            template: "<div></div>",
            scope: false,
            controller: function ($scope) {
                console.log("levelThree:controller");
            },
            compile: function (tElem, tAttrs) {
                console.log("levelThree:compiler");
                return {
                    pre: function (scope, elem, attrs) {
                        console.log("levelThree:pre function");
                    },
                    post: function (scope, elem, attrs) {
                        console.log("levelThree:post function");
                    }
                }
            }
        }
    })
})();