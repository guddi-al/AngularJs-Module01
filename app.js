angular.module('LunchChecker', [])
.controller('LunchCheckController', ['$scope', function($scope) {
    $scope.checkLunch = function() {
        if (!$scope.lunchMenu) {
            $scope.message = "Please enter data first";
        } else {
            var items = $scope.lunchMenu.split(',').map(item => item.trim()).filter(item => item !== '');
            $scope.message = items.length <= 3 ? "Enjoy!" : "Too much!";
        }
    };
}]);

