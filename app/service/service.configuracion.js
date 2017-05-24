angular.module('InventoryApp').service('registroUsuarioService', ['$http', function ($http) {
        this.agregarUsu = function (data) {
            return $http.post('http://localhost/Inventory2Copia/source/agregarUsuario.php',
                    $.param(data)); // Interacción con jQuery ($.param)
        };

        this.obtenerUsuarios = function () {
            return $http.get('http://localhost/Inventory2Copia/source/obtenerUsuarios.php');
        };

        this.editarUsu = function (data) {
            return $http.post('http://localhost/Inventory2Copia/source/editarUsuario.php',
                    $.param(data)); // Interacción con jQuery ($.param)
        };

        this.eliminarUsu = function (data) {
            return $http.post('http://localhost/Inventory2Copia/source/eliminarUsuario.php',
                    $.param(data)); // Interacción con jQuery ($.param)
        };
    }]);