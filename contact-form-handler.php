<?php

if (isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['email']) && isset($_POST['subject'])  && isset($_POST['message'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $subject_message = $_POST['subject'];
  $message = $_POST['message'];
  $to = "hidesh@live.dk";
  $subject = "Contact form submission";
  $body = "From: $name\n E-Mail: $email\n Message:\n $message";
  if (mail($to, $subject, $body)) {
    echo "Your message was sent successfully!";
    // Redirect to
    header("Location:kontaktOs.html");
  } else {
    echo "There was an error sending your message. Please try again later.";
    // Redirect to
    header("Location:kontaktOs.html");
  }
}

?>