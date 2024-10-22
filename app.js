var app = angular.module('employeePortal', []);

app.controller('EmployeeController', ['$scope', function ($scope) {
    console.log('Controller initialized');

    $scope.employees = [];
    $scope.employee = {};
    $scope.testMessage = "Hello, World!";

    $scope.addEmployee = function () {
        console.log('Add Employee function called');
        if ($scope.employee.name && $scope.employee.email) {
            console.log('Adding Employee:', $scope.employee);
            $scope.employees.push(angular.copy($scope.employee));
            console.log('Employees List:', $scope.employees);
            $scope.employee = {};
        }
    };

    $scope.removeEmployee = function (index) {
        console.log('Remove Employee function called');
        $scope.employees.splice(index, 1);
    };

    $scope.changeMessage = function () {
        console.log('Change Message function called');
        $scope.testMessage = "Button clicked!";
    };
}]);
