angular.module('InventoryApp').controller('inventarioController', ['$scope', 'registroArticuloService', '$localStorage', '$sessionStorage', '$location', '$route', '$timeout', function ($scope, agregarArticulo, $localStorage, $sessionStorage, $location, $route, $timeout) {

        $scope.nombreUsuario = null;
        $scope.dataRegistrarArticulo = {
            nomArticulo: '',
            descripcionArticulo: ''
        };
        $scope.modeloSoloLetras = '^[a-zA-Z ]+$';
        $scope.alerta = false;
        $scope.articulos = [];
        $scope.edit = {};

        if (typeof $localStorage.nombreUsuario !== "undefined") {
            $scope.nombreUsuario = $localStorage.nombreUsuario;
            $scope.dataRegistrarArticulo = {
                usuario_id: $localStorage.idUsuario
            };
            $scope.edit = {
                usuario_id: $localStorage.idUsuario
            };
        } else if (typeof $sessionStorage.nombreUsuario !== "undefined") {
            $scope.nombreUsuario = $sessionStorage.nombreUsuario;
            $scope.dataRegistrarArticulo = {
                usuario_id: $sessionStorage.idUsuario
            };
            $scope.edit = {
                usuario_id: $sessionStorage.idUsuario
            };
        }

        agregarArticulo.obtenerArticulos().then(function successCallback(response) {
            switch (response.data.code) {
                case 200:
                    $scope.articulos = response.data.datos;
                    break;
                case 400:
                    $scope.articulos = [];

            }
        });

        $scope.procesarEditarArticulo = function () {
            agregarArticulo.editarArt($scope.edit).then(function successCallback(response) {
                switch (response.data.code) {
                    case 200:
                        $scope.alerta = true;
                        $scope.edit = {};
                        $timeout(function () {
                            $('#editarArticulo').modal('toggle');
                        }, 700);
                        $timeout(function () {
                            $route.reload();
                        }, 1000);
                        break;
                }
            });
        };

        $scope.procesarRegistroArticulo = function () {
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
        };

        $scope.editar = function (dato) {
            $scope.edit.id = dato.id;
            $scope.edit.codigo = dato.codigo;
            $scope.edit.articulo = dato.articulo;
            $scope.edit.descripcion = dato.descripcion;
            $('#editarArticulo').modal('toggle');
        };

        $scope.eliminar = function (dato) {
            $('#eliminarArticulo').modal('toggle');
            $scope.articulo = dato.articulo;
            $scope.ideliminar = dato.id;
        };

        $scope.eliminarFinal = function (ideliminar) {
            agregarArticulo.eliminarArt({id: ideliminar}).then(function successCallback(response) {
                switch (response.data.code) {
                    case 200:
                        $scope.alerta = true;
                        $scope.edit = {};
                        $timeout(function () {
                            $('#eliminarArticulo').modal('toggle');
                        }, 700);
                        $timeout(function () {
                            $route.reload();
                        }, 1000);
                        break;
                }
            });
        };

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


