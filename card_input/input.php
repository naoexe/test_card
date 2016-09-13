<!DOCTYPE html>

<html lang="ja">

<head>
    
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>CARD 登録</title>

</head>

<body>

<?php
    
//phpinfo(); //PHP確認用
                        //ホスト名、ユーザー名、パスワード
$con = mysqli_connect('sddb0040193096.cgidb', 'sddbMjQ2Nzk4', '1234&abcd');
    
if (!$con) {
    
  exit('データベースに接続できませんでした。');
    
}
                                //データベース名
$result = mysqli_select_db($con,'sddb0040193096');
    
if (!$result) {
    
  exit('データベースを選択できませんでした。');
    
}

$result = mysqli_query($con,'SET NAMES utf8');
    
if (!$result) {
    
  exit('文字コードを指定できませんでした。');

}

$rarity = addslashes($_REQUEST['card_rarity']);
$name   = addslashes($_REQUEST['card_name']);
$series = addslashes($_REQUEST['card_series']);

$result = mysqli_query($con,"INSERT INTO `card_box`(`card_rarity`,`card_name`,`card_series`) VALUES('$rarity','$name','$series')");
    
if (!$result) {
    
    exit('CARDデータを登録できませんでした。');
    
}

$con = mysqli_close($con); //MySQLとの接続を切断する

if (!$con) {

    exit('データベースとの接続を閉じられませんでした。');

}

?>

<p>登録が完了しました。<br /><a href="input.html">戻る</a></p>

</body>
    
</html>