<?php

$user = $_POST["txtNum"];
$message = $_POST["txtMsg"];

require __DIR__ . '/vendor/autoload.php';
use Twilio\Rest\Client;

// Your Account SID and Auth Token from twilio.com/console
$account_sid = 'ACf65657542b1a022d0872b32057051326';
$auth_token = '27e1aac3837ece5ea23155c35c683a7a';
// In production, these should be environment variables. E.g.:
// $auth_token = $_ENV["TWILIO_AUTH_TOKEN"]

// A Twilio number you own with SMS capabilities
$twilio_number = "+13604690312";

$client = new Client($account_sid, $auth_token);
$client->messages->create(
    // Where to send a text message (your cell phone?)
    '+14794340578',
    array(
        'from' => $twilio_number,
        'body' => $user . " | " . $message
    )
);

header("Location: thankyou.html");
?>
