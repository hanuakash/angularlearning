(function () {
    angular.module("myApp").controller("loginCtroller", function ($scope, $route) {
        $scope.warning = null;
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
        $scope.login = function () {
            if (validation() == true) {
                console.log("we are ready to make the http call");
            }
            else {
                console.error("User input incorrect")
            }
        }
        $scope.retry = function () {
            $route.reload();
        }
    })
})();