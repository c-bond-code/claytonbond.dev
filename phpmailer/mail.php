
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

$body = $_POST["txtBody"];
$email = $_POST["txtEmail"];

$mail = new PHPMailer(TRUE);

try {
   
   $mail->setFrom('clayton@stringtech.org', $email);
   $mail->addAddress('clayton@stringtech.org', 'Clayton Bond Portfolio');
   $mail->Subject = 'Portfolio Email Message!';
   $mail->Body = $body;
   
   /* SMTP parameters. */
   
   /* Tells PHPMailer to use SMTP. */
   $mail->isSMTP();
   
   /* SMTP server address. */
   $mail->Host = 'smtp.gmail.com';

   /* Use SMTP authentication. */
   $mail->SMTPAuth = TRUE;
   
   /* Set the encryption system. */
   $mail->SMTPSecure = 'tls';
   
   /* SMTP authentication username. */
   $mail->Username = 'clayton@stringtech.org';
   
   /* SMTP authentication password. */
   $mail->Password = 'Forkbomb00';
   
   /* Set the SMTP port. */
   $mail->Port = 587;
   
   /* Finally send the mail. */
   $mail->send();
}
catch (Exception $e)
{
   echo $e->errorMessage();
}
catch (\Exception $e)
{
   echo $e->getMessage();
}

header("Location: thankyou.html");

?>
