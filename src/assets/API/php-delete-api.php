<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Header: Content-Type,Access-Control-Allow-Method,Access-Control-Allow-Header");

$data = json_decode(file_get_contents('php://input'),true);

$myId = $data["id"];

include_once "connection.php";

$sql="DELETE FROM `expencetable` WHERE `id` = $myId";
mysqli_query($conn,$sql);
if(mysqli_affected_rows($conn)>0){
   echo json_encode(array("message"=>"Deleted","status"=>true));
}else{
   echo json_encode(array("message"=>"ERROR","status"=>false));
}
?>
