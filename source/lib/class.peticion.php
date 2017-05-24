<?php

class peticion {

    private $get;
    private $post;
    private $files;

    public function __construct($get, $post, $files) {
        $this->get = $get;
        $this->post = $post;
        $this->files = $files;
    }

    public function getGet($variable) {
        return $this->get[$variable];
    }

    public function getPost($variable) {
        return $this->post[$variable];
    }

    public function getFiles($archivo) {
        return $this->files[$archivo];
    }

    public function hasGet($variable) {
        return isset($this->get[$variable]);
    }

    public function hasPost($variable) {
        return isset($this->post[$variable]);
    }

    public function hasFiles($archivo) {
        return isset($this->files[$archivo]);
    }

}
