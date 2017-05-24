angular.module('InventoryApp').service('seguridadService', ['$http', function ($http) {
        this.identificar = function (data) {
            return $http.post('http://localhost/Inventory2Copia/source/seguridad.php',
                    $.param(data)); // Interacción con jQuery ($.param)
        };
    }]);