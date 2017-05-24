<?php

class session {

    private $session;

    public function __construct($session) {
        $this->session = $session;
    }

    public function set($variable, $valor) {
        $this->session[$variable] = $valor;
    }

    public function get($variable) {
        return $this->session[$variable];
    }

    public function existe($variable) {
        return isset($this->session[$variable]);
    }

    public function borrar($variable) {
        unset($this->session[$variable]);
    }

}
