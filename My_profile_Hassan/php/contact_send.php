<?php
header('Content-Type: text/html; charset=utf-8');
if (isset($_POST['email'])) {
    $email_to = "hassanachiri10@gmail.com";
    $email_subject = "Email from";

    $first_name = $_POST['name'];
    $email_from = $_POST['email'];
    $comments = $_POST['message'];

    $email_message = "Form details below.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Name : " . clean_string($first_name) . "\n";
    $email_message .= "Email : " . clean_string($email_from) . "\n";
    $email_message .= "Comments : " . clean_string($comments) . "\n";

    //create email headers
    $headers = 'From: ' . $email_from . "\r\n" .
        'Reply-To: ' . $email_from . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

     <?php
        echo "<script type='text/javascript'>alert(' نموذج تواصل ضمن صفحة انترنت مع برمجية تحقق')</script>";
        echo "<script> window.location.assign('../index.html'); </script>";

        ?>


<?php } ?>