<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include_once "connection.php";

$sql="SELECT * FROM expencetable";
$res = mysqli_query($conn,$sql);

if(mysqli_num_rows($res) != 0){
    $getData = mysqli_fetch_all($res,MYSQLI_ASSOC);
    echo json_encode($getData);
}else{
    echo json_encode(array("message"=>"ERROR","status"=>false));
}
?>
