<?php

	// get the posted data
	$name = $_POST['name'];
	$email = $_POST['email'];	
	$phone = $_POST['phone'];	
	$message = $_POST['message'];	
	// $form_number = $_POST['form_number'];


			
	// write the email content
	$email_content  = "Name: $name\n";
	$email_content .= "Email: $email\n";
	$email_content .= "Phone: $phone\n";
	$email_content .= "Message: $message\n";
	// $email_content .= "Sent from: $form_number\n";
		
	// send to email
	mail ("snip3r_88@hotmail.it", "zagolovok", $email_content);

?>