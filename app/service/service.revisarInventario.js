angular.module('InventoryApp').service('revisarInventarioService', ['$http', function ($http) {

        this.obtenerArticulos = function () {
            return $http.get('http://localhost/Inventory2Copia/source/obtenerArticulos.php');
        };
    }]);

