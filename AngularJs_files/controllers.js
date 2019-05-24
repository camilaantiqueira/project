var app = angular.module('myAppfile', []);

app.controller('myCntrl',function($scope){
    $scope.showMe = false;
    $scope.myFunc = function(){
        $scope.showMe = !$scope.showMe;
    }
});