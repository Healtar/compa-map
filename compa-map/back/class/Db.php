<?php

class Db{

    protected $infos = array(
        'serveur' => 'localhost',
        'login' => 'root',
        'pass' => '',
        'base' => 'compa-map'

    );

    protected $db;

    public function __construct()
    {
        {
            try {
                $this->db = new PDO('mysql:host='.$this->infos['serveur'].';dbname='.$this->infos['base'], $this->infos['login'], $this->infos['pass']);
                $this->db->exec("SET CHARACTER SET utf8");
                $this->db->exec("SET NAMES utf8");
                $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $this->db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
                return $this->db;
    
            }
            catch(PDOException $e) {
    
                die('<h3>Erreur !</h3>');
            }
        }
    
    }
    


}



?>