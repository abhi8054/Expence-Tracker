<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: DELETE");
header("Access-Control-Allow-Header:*");



$data = json_decode(file_get_contents('php://input'),true);
var_dump($data);

$id = $data["id"];

include_once "connection.php";

$sql="DELETE FROM `expencetable` WHERE `id` = $id";

if(mysqli_query($conn,$sql)){
   echo json_encode(array("message"=>"Deleted","status"=>true));
}else{
   echo json_encode(array("message"=>"ERROR","status"=>false));
}
?>
