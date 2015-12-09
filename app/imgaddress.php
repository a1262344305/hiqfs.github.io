<?php
header('Access-Control-Allow-Origin: *');
if($_POST[address]!="")
{
  $text=fopen("text.txt","a+");
  fwrite($text,$_POST[address]);
  echo "OK";
  }else{
  $text=fopen("text.txt","r+");
  echo fread($text,filesize("text.txt"));
 }
  fclose($text);
?>
