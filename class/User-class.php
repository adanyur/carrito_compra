<?php
define('RUTA_PRODUCTO', dirname(dirname(__FILE__)));
require_once RUTA_PRODUCTO."/config/DBController.php";

class User extends DBController
{

    function Login($email,$password){

        $query = "SELECT count(*) FROM tbluser WHERE email=? AND password=?";

        $params = array(
            array(
                "param_type" => "s",
                "param_value" => $email
            ),
            array(
                "param_type" => "s",
                "param_value" => $password
            )
        );

        return $this->getDBResult($query, $params);

    }


    function registrar($firstname,$lastname,$email,$password,$comment,$zip,$town,$cell){
        $query = "INSERT INTO tbluser (Firstname,Lastname,Email,Password,Direcc,zip,town,cell) VALUES (?,?,?,?,?,?,?,?)";

        $params = array(
            array(
                "param_type" => "i",
                "param_value" => $firstname
            ),
            array(
                "param_type" => "i",
                "param_value" => $lastname
            ),
            array(
                "param_type" => "i",
                "param_value" => $email
            ),
            array(
                "param_type" => "i",
                "param_value" => $password
            ),
            array(
                "param_type" => "i",
                "param_value" => $comment
            ),
            array(
                "param_type" => "i",
                "param_value" => $zip
            ),
            array(
                "param_type" => "i",
                "param_value" => $town
            ),
            array(
                "param_type" => "i",
                "param_value" => $cell
            )
        );

            return $this->insertDB($query, $params);
    }
}