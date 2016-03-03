(function () {
    var locationWise = angular.module("myApp").filter("locationWise", function () {
        return function (list, location) {
            if (location!="" && location !==undefined && location!==null) {
                return list.filter(function (el, index) {
                    return el.location == location;
                })
            }
            else {
                return list;
            }
        }
    })
})();