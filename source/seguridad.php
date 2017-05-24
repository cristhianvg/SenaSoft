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

    $rsp = $consulta->validarUsuarioContrasena($peticion->getPost('usuario'), $peticion->getPost('contrasena'));
//    $consulta->insert($peticion->getPost('usuario'), $peticion->getPost('contrasena'), 'Marlon Villegas');
//    $consulta->update(2, 'marliton', '56123');
//    $consulta->delete(1); // borrado logico
//    $consulta->delete(2, false); // borrado fisico

    if (count($rsp) > 0) {
        $respuesta->responder(200, $rsp);
    } else {
        $respuesta->responder(401, false);
    }
} catch (Exception $exc) {
    echo $exc->getMessage();
}
