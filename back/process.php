<?php
    #process the index
    if(isset($_POST['c_btn'])&&($_POST['c_btn'] == "Send Message")){
        #read and clean data
        $visitorName = htmlspecialchars($_POST['c_name']);
        $subject = htmlspecialchars($_POST['c_sub']);
        $email = htmlspecialchars($_POST['c_mail']);
        $message = htmlspecialchars($_POST['c_body']);
        
        //call the function addMessage($name, $sub, $mail, $msg);
        addMessage($visitorName, $email, $subject, $message);
    }
    #
    #read info from form
    function addMessage($visitorName, $visitorEmail, $messageSubject, $messageBody){
        #
        $fileName = htmlentities(strip_tags($visitorName)); #set file name
        $message = "Name: $visitorName \nEmail: $visitorEmail \nSubject: $messageSubject\nMessage: $messageBody\n\nEnd.";
        #open files
        $fileHandle = fopen("./messages/".$fileName.".txt", "w+");
        #
        if(!$fileHandle){
            $returnValue = false;
        }else{
            #write to file
            fwrite($fileHandle, $message);
            $returnValue = true;
        }
        fclose($fileHandle);
        return $returnValue;
    }
?>