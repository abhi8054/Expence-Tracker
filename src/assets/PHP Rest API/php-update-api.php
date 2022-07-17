<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: PATCH,PUT,POST");
header("Access-Control-Allow-Header: Content-Type,Access-Control-Allow-Method,Access-Control-Allow-Header,Accept,X-Requested-With");

$data = json_decode(file_get_contents('php://input'),true);

$id = $data["id"];
$ename = $data["expTitle"];
$edate = $data["expDate"];
$erate = $data["expRate"];

include_once "connection.php";

$sql="UPDATE `expencetable` SET `expTitle`='$ename',`expDate`='$edate',`expRate`='$erate' WHERE `id`= '$id'";

if(mysqli_query($conn,$sql)){
   echo json_encode(array("message"=>"Updated","status"=>true));
}else{
   echo json_encode(array("message"=>"ERROR","status"=>false));
}
?>
