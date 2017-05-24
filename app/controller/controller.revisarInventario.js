angular.module('InventoryApp').controller('revisarInventarioController', ['$scope', 'revisarInventarioService', '$localStorage', '$sessionStorage', '$location', '$route', '$timeout', function ($scope, agregarArticulo, $localStorage, $sessionStorage, $location, $route, $timeout) {

        $scope.articulos = [];

        agregarArticulo.obtenerArticulos().then(function successCallback(response) {
            switch (response.data.code) {
                case 200:
                    $scope.articulos = response.data.datos;
                    break;
                case 400:
                    $scope.articulos = [];
            }
        });
    }]);