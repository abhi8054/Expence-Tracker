<?php
$conn = mysqli_connect("localhost","root",null,"expence");
if(!$conn){
    echo mysqli_connect_error();
    echo "hello";
}
?>