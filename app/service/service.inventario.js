angular.module('InventoryApp').service('registroArticuloService', ['$http', function ($http) {
        this.agregarArt = function (data) {
            return $http.post('http://localhost/Inventory2Copia/source/agregarArticulo.php',
                    $.param(data)); // Interacción con jQuery ($.param)
        };

        this.obtenerArticulos = function () {
            return $http.get('http://localhost/Inventory2Copia/source/obtenerArticulos.php');
        };

        this.editarArt = function (data) {
            return $http.post('http://localhost/Inventory2Copia/source/editarArticulo.php',
                    $.param(data)); // Interacción con jQuery ($.param)
        };

        this.eliminarArt = function (data) {
            return $http.post('http://localhost/Inventory2Copia/source/eliminarArticulo.php',
                    $.param(data)); // Interacción con jQuery ($.param)
        };
    }]);

