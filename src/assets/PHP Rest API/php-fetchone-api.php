<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: POST");
header("Access-Control-Allow-Header: Content-Type,Access-Control-Allow-Method,Access-Control-Allow-Header");


$data = json_decode(file_get_contents('php://input'),true);

$id = $data["id"];

include_once "connection.php";

$sql="SELECT * FROM `expencetable` WHERE `id` = $id";
$res = mysqli_query($conn,$sql);
if(mysqli_num_rows($res) !=0){
   $getData =mysqli_fetch_all($res,MYSQLI_ASSOC);
   echo json_encode($getData);
}else{
   echo json_encode(array("message"=>"ERROR","status"=>false));
}
?>
