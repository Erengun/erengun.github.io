<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
    if(isset($_POST["submit"]))
    {
        if($_POST["name"] && $_POST["email"] && $_POST['subject'] && $_POST["message"])
        {
            require "./phpmailer/includes/PHPMailer.php";
            require "./phpmailer/includes/SMTP.php";
            require "./phpmailer/includes/Exception.php";
            $mail = new PHPMailer();
            $mail ->isSMTP();
            $mail ->Host = "smtp.gmail.com";
            $mail ->SMTPAuth = "true";
            $mail ->SMTPSecure = "tsl";
            $mail ->Port = "587";
            $mail ->Username = "osmannes153@gmail.com";
            $mail ->Password = "7as123d92131asdas351238asdasd462asda5asdasdasd";
            //gönderen
            $mail ->Subject = "".$_POST['subject']."";
            $mail ->setFrom("osmannes53@gmail.com");
            $mail ->isHTML(true);
            //nereden
            $mail ->Body = "<h1> Ad - Soyad : ".$_POST['name']."</h1><br>".
                            "<h1> E-mail : ".$_POST['email']."<h1><br>".
                            "<h1> Konu :".$_POST['subject']."<h1><br>".
                            "<p> Mesaj : ".$_POST['message']."</p>";
            $mail ->addAddress("erengun4@gmail.com");
            //nereye
            if($mail ->Send())
            {
                echo "Sonnuda";
            }
            $mail ->smtpClose();
            header("Location: index.php");
        }
        else
        {
            echo "whatdefok";
        }
    }
    
    
?>
