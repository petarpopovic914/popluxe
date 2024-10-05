<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "popovicp29@gmail.com";
    $subject = "Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "Message could not be sent.";
    }
}
?>