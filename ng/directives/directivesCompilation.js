(function () {
    angular.module("myApp")
    .directive("levelOne", function () {
        return {
            restrict: "E",
            scope: {},
            template: "<div ng-transclude></div>",
            controller: function ($scope) {
                console.log("level-one:controller");
            },
            transclude:true,
            compile: function (tElem, tAttrs) {
                console.log("level-one: compile");
                return {
                    pre: function (scope,ele, attrs) {
                        console.log("level-one:pre");
                    },
                    post: function (scope, ele, attrs) {
                        console.log("level-one:post");
                    },
                }
            }
        }
    })
    .directive("levelTwo", function () {
        return {
            restrict: "E",
            scope: {},
            template: "<div ng-transclude></div>",
            controller: function ($scope) {
                console.log("level-two:controller");
            },
            transclude: true,
            compile: function (tElem, tAttrs) {
                console.log("level-two: compile");
                return {
                    pre: function (scope, ele, attrs) {
                        console.log("level-two:pre");
                    },
                    post: function (scope, ele, attrs) {
                        console.log("level-two:post");
                    },
                }
            }
        }
    })
    .directive("levelThree", function () {
        return {
            restrict: "E",
            scope: {},
            template: "<div ></div>",
            controller: function ($scope) {
                console.log("level-three:controller");
            },
            
            compile: function (tElem, tAttrs) {
                console.log("level-three: compile");
                return {
                    pre: function (scope, ele, attrs) {
                        console.log("level-three:pre");
                    },
                    post: function (scope, ele, attrs) {
                        console.log("level-three:post");
                    },
                }
            }
        }
    })
})()