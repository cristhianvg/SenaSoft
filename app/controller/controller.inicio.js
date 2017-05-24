angular.module('InventoryApp').controller('inicioController', ['$scope', 'registroArticuloService', '$localStorage', '$sessionStorage', '$location', '$route', '$timeout', function ($scope, agregarArticulo, $localStorage, $sessionStorage, $location, $route, $timeout) {

        $scope.nombreUsuario = null;
        $scope.dataRegistrarArticulo = {};
        $scope.alerta = false;
        $scope.articulos = [];

        if (typeof $localStorage.nombreUsuario !== "undefined") {
            $scope.nombreUsuario = $localStorage.nombreUsuario;
        } else if (typeof $sessionStorage.nombreUsuario !== "undefined") {
            $scope.nombreUsuario = $sessionStorage.nombreUsuario;
        }

        /*agregarArticulo.obtenerArticulos().then(function successCallback(response) {
         switch (response.data.code) {
         case 200:
         $scope.articulos = response.data.datos;
         break;
         case 400:
         $scope.articulos = [];
         }
         });*/

        /*$scope.procesarRegistroArticulo = function () {
         agregarArticulo.agregarArt($scope.dataRegistrarArticulo).then(function successCallback(response) {
         switch (response.data.code) {
         case 200:
         $scope.alerta = true;
         $scope.dataRegistrarArticulo = '';
         $timeout(function () {
         $('#regArticulo').modal('toggle');
         }, 700);
         $timeout(function () {
         $route.reload();
         }, 1000);
         break;
         }
         });
         };*/

        $scope.show = [];
        $scope.showDetail = function (id) {
            if ($scope.show[id] === true) {
                $scope.show[id] = false;
            } else {
                $scope.show[id] = true;
            }
        }
        ;

    }]);



