angular.module('myApp', ['ngMessages'])
    .controller("myCtrl", function ($scope) {
        $scope.data = {};

        $scope.gender = {};

        $scope.inputHide = false;

        $scope.submit = function () {
            console.log($scope.data);
            console.log($scope.madInput);
            $scope.inputHide = true;
        }

    });
