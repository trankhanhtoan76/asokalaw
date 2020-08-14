<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

class KTMailer
{
    private $mail;

    function __construct()
    {
        global $app;

        $kte = new KTEncrypt();
        $this->mail = new PHPMailer(true);
        $this->mail->SMTPDebug = SMTP::DEBUG_OFF;
        $this->mail->isSMTP();
        $this->mail->Host = $app['settings']['mailer_host'];
        $this->mail->SMTPAuth = true;
        $this->mail->Username = $app['settings']['mailer_user'];
        $this->mail->Password = $kte->decode($app['settings']['mailer_pass'], 'tkt');
        $this->mail->SMTPSecure = 'tls';
        $this->mail->Port = 587;
        try {
            $this->mail->setFrom($app['settings']['mailer_from'], $app['settings']['mailer_fromname']);
        } catch (\PHPMailer\PHPMailer\Exception $e) {
        }
        try {
            $this->mail->addReplyTo($app['settings']['mailer_replyto'], $app['settings']['mailer_replytoname']);
        } catch (\PHPMailer\PHPMailer\Exception $e) {
        }
    }

    function sendEmail($subject, $body, array $attachments, array $reveicer, array $cc = array(), array $bcc = array())
    {
        if (!empty($reveicer))
            foreach ($reveicer as $r)
                if (!empty($r['email'])) try {
                    $this->mail->addAddress($r['email'], $r['name']);
                } catch (\PHPMailer\PHPMailer\Exception $e) {
                }

        if (!empty($cc))
            foreach ($cc as $r)
                if (!empty($r['email'])) try {
                    $this->mail->addCC($r['email'], $r['name']);
                } catch (\PHPMailer\PHPMailer\Exception $e) {
                }

        if (!empty($bcc))
            foreach ($bcc as $r)
                if (!empty($r['email'])) try {
                    $this->mail->addBCC($r['email'], $r['name']);
                } catch (\PHPMailer\PHPMailer\Exception $e) {
                }

        $this->mail->isHTML(true);
        $this->mail->Subject = $subject;
        $this->mail->Body = $body;

        if (!empty($attachments))
            foreach ($attachments as $at)
                if (!empty($at['path'])) try {
                    $this->mail->addAttachment($at['path'], $at['name']);
                } catch (\PHPMailer\PHPMailer\Exception $e) {
                }

        try {
            return $this->mail->send();
        } catch (\PHPMailer\PHPMailer\Exception $e) {
        }
    }
}