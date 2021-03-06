<?php

session_start();

require 'lib/class.session.php';
require 'lib/class.peticion.php';
require 'lib/class.respuesta.php';
require 'lib/class.basedatos.php';
require 'lib/class.consulta.php';

try {
    $session = new session($_SESSION);
    $peticion = new peticion($_GET, $_POST, $_FILES);
    $respuesta = new respuesta();
    $consulta = new consulta();

    $consulta->agregarUsuario($peticion->getPost('nomUsuario'), $peticion->getPost('contrasena'), $peticion->getPost('nombre'), $peticion->getPost('rol'));
    $respuesta->responder(200, true);
} catch (Exception $exc) {
    echo $exc->getMessage();
}

