<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';
require __DIR__ . '/PHPMailer/src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST["nome"]);
    $email = htmlspecialchars($_POST["email"]);
    $mensagem = htmlspecialchars($_POST["mensagem"]);

    $mail = new PHPMailer(true);
    

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; 
        $mail->SMTPAuth   = true;
        $mail->Username   = 'portfoliogrupo10@gmail.com';
        $mail->Password   = 'saopspicrxkuayfa';
        $mail->SMTPSecure = 'tls'; 
        $mail->Port       = 587;

        $mail->setFrom($mail->Username, 'Site Jongas');
        $mail->addAddress('portfoliogrupo10@gmail.com', 'Você');

        $mail->isHTML(true);
        $mail->Subject = "Mensagem de $nome via site Jongas";
        $mail->Body    = "
            <strong>Nome:</strong> $nome<br>
            <strong>E-mail:</strong> $email<br><br>
            <strong>Mensagem:</strong><br>$mensagem
        ";

        $mail->send();
        echo "<h2>Mensagem enviada com sucesso! Obrigado por entrar em contato. ✅</h2>";
    } catch (Exception $e) {
        echo "<h2>Erro ao enviar a mensagem. ❌</h2>";
        echo "<p>Detalhes: {$mail->ErrorInfo}</p>";
    }
} else {
    echo "Acesso inválido.";
}
?>
