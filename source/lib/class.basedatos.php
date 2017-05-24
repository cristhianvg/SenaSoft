<?php

class basedatos {

    private $instancia;
    private $driver;
    private $host;
    private $port;
    private $dbname;
    private $usuario;
    private $contrasena;
    private $dsn;

    public function __construct() {
        $this->instancia = null;
        $this->driver = 'pgsql';
        $this->host = 'localhost';
        $this->port = 5432;
        $this->dbname = 'inventory';
        $this->usuario = 'postgres';
        $this->contrasena = '123';
        // pgsql:host=localhost;port=5432;dbname=senasoft
        $this->dsn = $this->driver . ':host=' . $this->host . ';port=' . $this->port . ';dbname=' . $this->dbname;
        $this->conectar();
    }

    private function conectar() {
        if ($this->instancia === null) {
            try {
                $this->instancia = new PDO($this->dsn, $this->usuario, $this->contrasena);
                $this->instancia->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $exc) {
                throw $exc;
            }
        }
    }

    /**
     *
     * @return PDO
     */
    protected function getInstancia() {
        return $this->instancia;
    }

}
