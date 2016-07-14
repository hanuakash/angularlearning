(function () {
    var loginBox = angular.module("myApp").directive("loginBox", function () {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "ng/templates/login-box.html",
            scope: {},
            controller: function ($scope, $route, svcApi, $location) {
                $scope.warning = null;
                $scope.awaiting = false;
                $scope.awaitingMessage = "";
                $scope.user = {
                    email: "",
                    password: ""
                };
                var validation = function () {
                    if ($scope.user.email !== "" && /@/.test($scope.user.email) == false) {
                        if ($scope.user.password !== "") {
                            $scope.warning = null;
                            return true;
                        }
                        else {
                            $scope.warning = {
                                message: "There is something wrong with the password, better check yourself",
                                errorEmail: false,
                                errorPassword: true

                            }
                        }
                    }
                    else {
                        $scope.warning = {
                            message: "There is something wrong with the email, better check yourself",
                            errorEmail: true,
                            errorPassword: false
                        }
                    }
                }
                //{"_id" : 45345dfsdhfjkdh ,email:"niranjan_awati", "empno":41993, "location":"Pune" }
                $scope.login = function () {
                    if (validation() == true) {
                        $scope.awaiting = true;
                        $scope.awaitingMessage = "We have hit the service";

                        svcApi.getUserDetails().then(function (data) {
                            //this is where we can login to the application
                            //lets see that now .. 
                            $scope.awaiting = false;
                            $location.url("/employees");
                        }, function (data) {
                            console.debug(data)
                        })

                    }
                    else {
                        console.error("User input incorrect")
                    }
                }
                $scope.retry = function () {
                    $route.reload();
                }
            }
        }
    })
})();