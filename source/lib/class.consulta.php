<?php

class consulta extends basedatos {

    public function editarArticulo($id, $codigo, $nomarticulo, $descripcionarticulo, $usuario_id) {
        try {
            $sql = 'UPDATE articulo SET codigo = :cod, nombre = :nom, descripcion = :des, usuario_id = :usu_id WHERE id = :id ';
            $params = array(
                ':id' => $id,
                ':cod' => $codigo,
                ':nom' => $nomarticulo,
                ':des' => $descripcionarticulo,
                ':usu_id' => $usuario_id
            );
            $estamento = $this->getInstancia()->prepare($sql);
            $estamento->execute($params);
            return true;
        } catch (PDOException $exc) {
            throw $exc;
        }
    }

    public function editarUsuario($id, $usuario, $contrasena, $nombre, $rol) {
        try {
            $sql = 'UPDATE usuario SET usuario = :usu, contrasena = :pass, nombre = :nom, rol = :rol WHERE id = :id AND deleted_at IS NULL';
            $params = array(
                ':id' => $id,
                ':usu' => $usuario,
                ':pass' => hash('md5', $contrasena),
                ':nom' => $nombre,
                ':rol' => $rol,
            );
            $estamento = $this->getInstancia()->prepare($sql);
            $estamento->execute($params);
            return true;
        } catch (PDOException $exc) {
            throw $exc;
        }
    }

    public function obtenerUsuarios() {
        try {
            $sql = 'SELECT id, usuario, nombre, rol FROM usuario WHERE deleted_at IS NULL';
            $estamento = $this->getInstancia()->prepare($sql);
            $estamento->execute();
            return $estamento->fetchAll(PDO::FETCH_OBJ);
        } catch (PDOException $exc) {
            throw $exc;
        }
    }

    public function obtenerArticulos() {
        try {
            $sql = 'SELECT articulo.id, '
                    . 'articulo.codigo, '
                    . 'articulo.nombre AS articulo, '
                    . 'articulo.descripcion, '
                    . 'usuario.nombre AS usuario '
                    . 'FROM articulo, usuario '
                    . 'WHERE articulo.usuario_id = usuario.id';
            $estamento = $this->getInstancia()->prepare($sql);
            $estamento->execute();
            return $estamento->fetchAll(PDO::FETCH_OBJ);
        } catch (PDOException $exc) {
            throw $exc;
        }
    }

    public function validarUsuarioContrasena($usuario, $contrasena) {
        try {
            $sql = 'SELECT id, nombre '
                    . 'FROM usuario '
                    . 'WHERE usuario = :usu '
                    . 'AND contrasena = :pass '
                    . 'AND deleted_at IS NULL';
            $params = array(
                ':usu' => (string) $usuario,
                ':pass' => (string) hash('md5', $contrasena)
            );
            $estamento = $this->getInstancia()->prepare($sql);
            $estamento->execute($params);
            return $estamento->fetchAll(PDO::FETCH_OBJ);
            // $rsp[0]->id
            // $rsp[0]->nombre
        } catch (PDOException $exc) {
            throw $exc;
        }
    }

    public function insert($usuario, $contrasena, $nombre) {
        try {
            $sql = 'INSERT INTO usuario (usuario, contrasena, nombre) VALUES (:usu, :pass, :nom)';
            $params = array(
                ':usu' => $usuario,
                ':pass' => hash('md5', $contrasena),
                ':nom' => $nombre
            );
            $estamento = $this->getInstancia()->prepare($sql);
            $estamento->execute($params);
            return true;
        } catch (PDOException $exc) {
            throw $exc;
        }
    }

    public function update($id, $usuario, $contrasena) {
        try {
            $sql = 'UPDATE usuario SET usuario = :usu, contrasena = :pass WHERE id = :id AND deleted_at IS NULL';
            $params = array(
                ':id' => $id,
                ':usu' => $usuario,
                ':pass' => hash('md5', $contrasena) 
            );
            $estamento = $this->getInstancia()->prepare($sql);
            $estamento->execute($params);
            return true;
        } catch (PDOException $exc) {
            throw $exc;
        }
    }

    public function delete($id, $logico = true) {
        try {
            if ($logico === true) {
                $sql = 'UPDATE usuario SET deleted_at = now() WHERE id = :id';
                $params = array(
                    ':id' => $id
                );
                $estamento = $this->getInstancia()->prepare($sql);
                $estamento->execute($params);
            } else if ($logico === false) {
                $sql = 'DELETE FROM usuario WHERE id = :id AND deleted_at IS NULL';
                $params = array(
                    ':id' => (integer) $id
                );
                $estamento = $this->getInstancia()->prepare($sql);
                $estamento->execute($params);
            }
            return true;
        } catch (PDOException $exc) {
            throw $exc;
        }
    }

    public function deleteArt($id, $logico = false) {
        try {
            if ($logico === true) {
                $sql = 'UPDATE articulo SET deleted_at = now() WHERE id = :id';
                $params = array(
                    ':id' => $id
                );
                $estamento = $this->getInstancia()->prepare($sql);
                $estamento->execute($params);
            } else if ($logico === false) {
                $sql = 'DELETE FROM articulo WHERE id = :id AND deleted_at IS NULL';
                $params = array(
                    ':id' => (integer) $id
                );
                $estamento = $this->getInstancia()->prepare($sql);
                $estamento->execute($params);
            }
            return true;
        } catch (PDOException $exc) {
            throw $exc;
        }
    }

    public function agregarArticulo($codigo, $nomArticulo, $descripcionArticulo, $usuario_id) {
        try {
            $sql = 'INSERT INTO articulo (codigo, nombre, descripcion, usuario_id) VALUES (:cod, :nomArt, :descArt, :usuario_id)';
            $params = array(
                ':cod' => $codigo,
                ':nomArt' => $nomArticulo,
                ':descArt' => $descripcionArticulo,
                ':usuario_id' => $usuario_id
            );
            $estamento = $this->getInstancia()->prepare($sql);
            $estamento->execute($params);
            return true;
        } catch (PDOException $exc) {
            throw $exc;
        }
    }

    public function agregarUsuario($usuario, $contrasena, $nombre, $rol) {
        try {
            $sql = 'INSERT INTO usuario (usuario, contrasena, nombre, rol) VALUES (:usu, :pass, :nom, :rol)';
            $params = array(
                ':usu' => $usuario,
                ':pass' => hash('md5', $contrasena),
                ':nom' => $nombre,
                ':rol' => $rol
            );
            $estamento = $this->getInstancia()->prepare($sql);
            $estamento->execute($params);
            return true;
        } catch (PDOException $exc) {
            throw $exc;
        }
    }

}
