<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require '../vendor/autoload.php';

$data = json_decode(file_get_contents("php://input"), true);
print_r($data);

$type = $data['type'];

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host       = 'lagueslo.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@lagueslo.com';
    $mail->Password   = 'smtp11!';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 465;

    //Recipients
    $mail->setFrom('info@lagueslo.com', 'Mailer');
    $mail->addAddress('info@lagueslo.com');

    // Content based on type
    if ($type === 'newsletter') {
        $email = $data['email'];

        $mail->isHTML(true);
        $mail->Subject = 'New Newsletter Subscription';
        $mail->Body    = "New subscription from: $email";
    } else if ($type === 'contact') {
        $name = $data['name'];
        $email = $data['email'];
        $message = $data['message'];

        $mail->isHTML(true);
        $mail->Subject = 'New Contact Message';
        $mail->Body    = "Message from: $name ($email) - $message";
    }

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Email has been sent']);
} catch (Exception $e) {
  echo json_encode(['success' => false, 'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}
?>
