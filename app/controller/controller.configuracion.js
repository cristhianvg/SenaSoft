angular.module('InventoryApp').controller('configuracionController', ['$scope', 'registroUsuarioService', '$localStorage', '$sessionStorage', '$route', '$timeout', function ($scope, agregarUsuario, $localStorage, $sessionStorage, $route, $timeout) {

        $scope.nombreUsuario = null;
        $scope.dataRegistrarUsuario = {
            nomUsuario: '',
            nombre: ''
        };
        $scope.modeloSoloLetras = '^[a-zA-Z ]+$';
        $scope.alerta = false;
        $scope.usuarios = [];
        $scope.edit = {};

        if (typeof $localStorage.nombreUsuario !== "undefined") {
            $scope.nombreUsuario = $localStorage.nombreUsuario;
        } else if (typeof $sessionStorage.nombreUsuario !== "undefined") {
            $scope.nombreUsuario = $sessionStorage.nombreUsuario;
        }

        agregarUsuario.obtenerUsuarios().then(function successCallback(response) {
            switch (response.data.code) {
                case 200:
                    $scope.usuarios = response.data.datos;
                    break;
                case 400:
                    $scope.usuarios = [];
            }
        });

        $scope.procesarEditarUsuario = function () {
            agregarUsuario.editarUsu($scope.edit).then(function successCallback(response) {
                switch (response.data.code) {
                    case 200:
                        $scope.alerta = true;
                        $scope.edit = {};
                        $timeout(function () {
                            $('#editarUsuario').modal('toggle');
                        }, 700);
                        $timeout(function () {
                            $route.reload();
                        }, 1000);
                        break;
                }
            });
        };

        $scope.procesarRegistroUsuario = function () {
            agregarUsuario.agregarUsu($scope.dataRegistrarUsuario).then(function successCallback(response) {
                switch (response.data.code) {
                    case 200:
                        $scope.alerta = true;
                        $scope.dataRegistrarUsuario = '';
                        $timeout(function () {
                            $('#nuevoUsuario').modal('toggle');
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
            $scope.edit.nomUsuario = dato.usuario;
            $scope.edit.nombre = dato.nombre;
            $scope.edit.rol = dato.rol;
            $('#editarUsuario').modal('toggle');
        };

        $scope.eliminar = function (dato) {
            $('#eliminarUsuario').modal('toggle');
            $scope.nombre = dato.nombre;
            $scope.ideliminar = dato.id;
        };

        $scope.eliminarFinal = function (ideliminar) {
            agregarUsuario.eliminarUsu({id: ideliminar}).then(function successCallback(response) {
                switch (response.data.code) {
                    case 200:
                        $scope.alerta = true;
                        $scope.edit = {};
                        $timeout(function () {
                            $('#eliminarUsuario').modal('toggle');
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
        };

    }]);
