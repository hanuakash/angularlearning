(function () {
    var testCtroller = angular.module("myApp").controller("testCtroller", function ($scope, $rootScope) {
        $scope.user = {
            title: "Niranjan Awati",
            details: {
                contact: "54353",
                email: "niranjan_awati",
                blog: "fdfsfs//wordpress.com",
                website:"http://dsdasdsaadasda"
            }
        }
        $scope.user = {
            title: "Niranjan Awati",
            details: {
                bankaccount: "456565465756"
            }
        };
        $scope.fireEvent = function () {
            console.log("firing the message");
            $rootScope.$broadcast("test-event", { message: "Hi there from within the controller" });
        }

        $scope.listener = function () {
            console.log("We have received your message");
        }
        
    })
})();