angular.module('InventoryApp').controller('logoutController', ['$scope', '$location', '$localStorage', '$sessionStorage', function ($scope, $location, $localStorage, $sessionStorage) {
        $localStorage.$reset();
        $sessionStorage.$reset();
        $location.path('/');
    }]);


