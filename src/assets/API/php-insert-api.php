<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: POST");
header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Method");

$data = json_decode(file_get_contents('php://input'),true);

$ename = $data["expTitle"];
$edate = $data["expDate"];
$erate = $data["expRate"];


include_once "connection.php";

$sql="INSERT INTO `expencetable`(`expTitle`, `expDate`, `expRate`) VALUES ('$ename','$edate','$erate')";
mysqli_query($conn,$sql);
if(mysqli_affected_rows($conn)>0){
   echo json_encode(array("message"=>"Inserted","status"=>true));
}else{
   echo json_encode(array("message"=>"ERROR","status"=>false));
}
?>
