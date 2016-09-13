<?php
 
$data = array();
$page = $_POST['page'];
 
$conn = mysql_connect('sddb0040193096.cgidb', 'sddbMjQ2Nzk4', '1234&abcd');
 
$db = mysql_select_db('sddb0040193096', $conn);
 
$sql = " SELECT * FROM `card_box` ORDER BY `card_series` ASC " . $page;
$res = mysql_query($sql, $conn);
 
while ($row = mysql_fetch_array($res)) {
    $data[] = $row;
}
 
mysql_close($conn);
 
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);
 
?>