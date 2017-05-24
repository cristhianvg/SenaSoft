angular.module('InventoryApp').controller('indexController', ['$scope', 'seguridadService', '$location', '$localStorage', '$sessionStorage', function ($scope, seguridad, $location, $localStorage, $sessionStorage) {

        $scope.dataLogin = {
            recordar: false
        };
        $scope.alerta = false;

        // interaccion con almacenamiento local y de sesión
        if (typeof $sessionStorage.dataLogin !== "undefined") {
            $scope.dataLogin = $sessionStorage.dataLogin;
        } else if (typeof $localStorage.dataLogin !== "undefined") {
            $scope.dataLogin = $localStorage.dataLogin;
        }

        $scope.procesarLogin = function () {
            seguridad.identificar($scope.dataLogin).then(function successCallback(response) {
                switch (response.data.code) {
                    case 200:
                        if ($scope.dataLogin.recordar === true) {
                            $localStorage.dataLogin = $scope.dataLogin; // interaccion con almacenamiento local
                            $localStorage.idUsuario = response.data.datos[0].id;
                            $localStorage.nombreUsuario = response.data.datos[0].nombre;
                        } else {
                            $sessionStorage.dataLogin = $scope.dataLogin; // interaccion con almacenamiento de sesion
                            $sessionStorage.idUsuario = response.data.datos[0].id;
                            $sessionStorage.nombreUsuario = response.data.datos[0].nombre;
                        }
                        $location.path('/inicio');
         
                        break;
                    case 401:
                        $scope.alerta = true;
                        $scope.dataLogin = {
                            recordar: false
                        };
                        break;
                }
            });
        };

    }]);


