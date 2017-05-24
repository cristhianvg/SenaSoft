angular.module('InventoryApp').config(['$routeProvider', '$httpProvider', function config($routeProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        $routeProvider.
                when('/', {
                    controller: 'indexController',
                    templateUrl: 'app/template/index.html'
                }).
                when('/inicio', {
                    controller: 'inicioController',
                    templateUrl: 'app/template/inicio.html'
                }).
                when('/inventario', {
                    controller: 'inventarioController',
                    templateUrl: 'app/template/inventario.html'
                }).
                when('/configuracion', {
                    controller: 'configuracionController',
                    templateUrl: 'app/template/configuracion.html'
                }).
                when('/revisarInventario', {
                    controller: 'revisarInventarioController',
                    templateUrl: 'app/template/revisarInventario.html'
                }).
                when('/logout', {
                    template: '',
                    controller: 'logoutController'
                }).
                otherwise('/');
    }
]);


