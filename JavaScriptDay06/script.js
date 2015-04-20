var app = angular.module('app', []);

//Takes 2 parameters:
//1 - name of the controller
//2 - function to hold the controller itself
app.controller('HomeController', function ($scope) {
    //$scope.Task is the value from our input
    $scope.tasks = [];
    $scope.tasks[0] = "test";
    //pulls the value from the input, and pushes it into our array
    $scope.addTask = function () {
        $scope.tasks.push($scope.Task);
        $scope.Task = '';
    };
});