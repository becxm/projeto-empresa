<?php

$dbHost = "localhost";
$dbUsername = "root";
$dbPassword = "";    
$dbName = "newsletter";

$connection = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);

if (!$connection) {
    die("Erro na conexão: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["email"]) && !empty($_POST["email"])) {
        $email = $_POST["email"];

        $sql = "INSERT INTO newsletter (email) VALUES (?)";
        $stmt = mysqli_prepare($connection, $sql);
        mysqli_stmt_bind_param($stmt, "s", $email);

        if (mysqli_stmt_execute($stmt)) {
            echo "E-mail cadastrado com sucesso!";
        } else {
            echo "Erro ao cadastrar e-mail: " . mysqli_error($connection);
        }

        mysqli_stmt_close($stmt);
    } else {
        echo "Por favor, insira um e-mail válido.";
    }
}

mysqli_close($connection);

?>