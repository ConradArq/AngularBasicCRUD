var app = angular.module('app', []);

//Takes 2 parameters:
//1 - name of the controller
//2 - function to hold the controller itself
app.controller('HomeController', function ($scope) {
    $scope.contacts = [];
    $scope.contact = function (name, age) {
        this.name = name;
        this.age = age;
    };

    $scope.addContact = function () {
        $scope.contacts.push(new $scope.contact($scope.inputName, $scope.inputAge));
        $scope.inputName = ''; $scope.inputAge = '';
    };

    $scope.deleteContact = function (i) {
        $scope.contacts.splice(i, 1);
    };

    $scope.editContact = function (i) {
        $scope.contacts[i] = new $scope.contact($scope.inputName, $scope.inputAge);
        $scope.inputName = ''; $scope.inputAge = '';
    };
});