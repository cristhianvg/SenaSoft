<?php

class respuesta {

    public function responder($codigo, $datos) {
        header("Content-Type: application/json; charset=utf-8");
        $respuesta = array(
            'code' => $codigo,
            'datos' => $datos
        );
        echo json_encode($respuesta);
    }

}
