<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*Function adds message file*/
function addMessage($name, $subj, $mail, $body){
    
    $file_name = htmlentities(strip_tags($name)); #set file name
    $msg = "Name: $name \nEmail: $mail \nSubject: $subj\nMessage: $body\n\nEnd.";
    #open files
    $file = fopen("./messages/".$file_name.".txt", "w+");

    if(!$file){
        $r = false;
    }else{
        #write to file
        fwrite($file, $msg);
        $r = true;
    }
    fclose($file);
    return $r;
}
?>