<?php
    require("PHPMailer-master/src/PHPMailer.php");
    require("PHPMailer-master/src/SMTP.php");
    require("PHPMailer-master/src/Exception.php");

    use PHPMailer\PHPMailer\PHPMailer; // Add these lines
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    // obtenemos el json tal como viene
    $postData = file_get_contents("php://input");

    // Comprobar que los datos son correctos y en formato vÃ¡lido
    if (!empty($postData) && is_json($postData)) {
        // Deserializar el json a un array
        $data = json_decode($postData, true);

        // guardar los datos del array en variables
        
        $de = $data['correo'];
        $nombre = $data['nombre'];
        $asunto = $data['asunto'];
        $mensaje = $data['mensaje'];

        $mail = new PHPMailer(true);
        
        $mail->CharSet = 'UTF-8';
        
        $mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only
        $mail->IsSMTP(); // enable SMTP
        $mail->Host = "Servidor_del_correo";
        $mail->SMTPAuth = true; // authentication enabled
        $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
        $mail->Port = 465; // or 587
        
        $mail->Username = "correo@ejemplo.com";
        $mail->Password = "*********";
        
        $mail->IsHTML(true);
        $mail->SetFrom("correo@ejemplo.com", $nombre);
        $emailSignature = "<p style=\"color: gray; font-size: 12px;\">Correo electr¨®nico: $de</p>";
        $mail->Subject = $asunto;
        $mail->Body = $mensaje;
        $mail->AddAddress("correo@ejemplo.com");
        $mail->addReplyTo($de, $nombre);

        // Enviar el correo
        if(!$mail->Send()) {
            echo 0;
        } else {
            echo 1;
        }
    } else {
        echo 0;
    }

    // FunciÃ³n para comprobar si un string es un JSON valido
    function is_json($string) {
        json_decode($string);
        return json_last_error() === JSON_ERROR_NONE;
    }
?>