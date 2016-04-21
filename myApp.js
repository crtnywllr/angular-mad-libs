angular.module('myApp', ['ngMessages'])
    .controller("myCtrl", function ($scope) {
        $scope.data = {};

        $scope.gender = {};

        $scope.inputHide = false;

        $scope.submit = function () {
            $scope.inputHide = true;
        }
        $scope.reset = function () {
            $scope.inputHide = false;
            $scope.data = {};
        }
    });
