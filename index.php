<!DOCTYPE html>
<html ng-app="InventoryApp">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/estiloIndex.css">
        <link rel="stylesheet" href="css/estiloInicio.css">
        <link rel="stylesheet" href="css/estiloInventario.css">
        <link rel="stylesheet" href="css/estiloConfiguracion.css">
    </head>
    <body>

        <div ng-view ng-cloak></div>



        <!-- librerias de Angular -->
        <script src="js/angular-1.6.1/angular.min.js" type="text/javascript"></script>
        <script src="js/angular-1.6.1/angular-route.min.js" type="text/javascript"></script>
        <script src="js/angular-1.6.1/angular-resource.min.js" type="text/javascript"></script>
        <script src="js/ngStorage-0.3.11/ngStorage.min.js" type="text/javascript"></script>

        <!-- librerias jquery -->
        <script src="js/jquery-1.12.4.min.js"></script>
        <script src="js/bootstrap.min.js"></script>


        <!-- enlazamos app.js y app.config.js -->
        <script src="app/app.js" type="text/javascript"></script>
        <script src="app/app.config.js" type="text/javascript"></script>

        <!-- enlazamos los servicios de angular -->
        <script src="app/service/service.login.js" type="text/javascript"></script>
        <script src="app/service/service.inicio.js" type="text/javascript"></script>
        <script src="app/service/service.configuracion.js" type="text/javascript"></script>
        <script src="app/service/service.inventario.js" type="text/javascript"></script>
        <script src="app/service/service.revisarInventario.js" type="text/javascript"></script>

        <!-- enlazamos los controllers -->
        <script src="app/controller/controller.index.js" type="text/javascript"></script>
        <script src="app/controller/controller.inicio.js" type="text/javascript"></script>
        <script src="app/controller/controller.inventario.js" type="text/javascript"></script>
        <script src="app/controller/controller.configuracion.js" type="text/javascript"></script>
        <script src="app/controller/controller.revisarInventario.js" type="text/javascript"></script>
        <script src="app/controller/controller.logout.js" type="text/javascript"></script>
    </body>
</html>