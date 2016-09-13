<?php

error_reporting(E_ALL & ~E_NOTICE); //NOTICEエラーを非表示に

/*** データベースに接続するための宣言 ***/
$con = mysqli_connect('sddb0040193096.cgidb', 'sddbMjQ2Nzk4', '1234&abcd') or die(mysqli_error());

mysqli_set_charset($con, "utf8");
mysqli_select_db($con,'sddb0040193096');
mysqli_query($con,'SET NAMES UTF8');

function hsc($str){
    
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
    
}

//このページでechoしたものがhtmlに返されて出力される
header("Content-type: text/plain; charset=UTF-8");

//Ajaxによるリクエストかどうかの識別を行う
//strtolower()を付けるのは、XMLHttpRequestやxmlHttpRequestで返ってくる場合があるため
if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){  

    if(isset($_POST['request'])){

    //card_id(int型)で検索するためint以外を弾く
    $request= (int)filter_input(INPUT_POST, 'request');

    $sql = sprintf("SELECT * FROM card_box WHERE id LIKE '%s'",
                   mysqli_real_escape_string($con,'%'.addcslashes(hsc($request), '\_%').'%'));
      
    $res = mysqli_query($con,$sql);
        
    if(mysqli_num_rows($res) != 0){
        
        $String .="<p><span class='tt_id'>ID</span>
                    <span class='tt_name'>NAME</span>
                    <span class='tt_rarity'>RARITY</span>
                    <span class='tt_series'>SERIES</span></p>";
        
        while($row = mysqli_fetch_assoc($res)){
          
            $card_id   = $row['id'];
            $card_name = $row['card_name'];
            $card_rarity = $row['card_rarity'];
            $card_series = $row['card_series'];
            
            $String .= "<p><span class='id'><b>".$card_id."</b></span>";
            $String .= "<span class='card_name'><b>".$card_name."</b></span>";
            $String .= "<span class='card_rarity'><b>".$card_rarity."</b></span>";
            $String .= "<span class='card_series'><b>".$card_series."</b></span></p>";
          
        }
        
    } else {
        
        //デバッグ用 データがなかった時にSQLを出力する
        echo "該当するIDが一つもありませんでした。<br />";
        echo $sql;
        
    }
        //該当したIDが一つでもあれば、この変数の中身が表示される
        echo $String;
      
    } else {
      
        echo 'The parameter of "request" is not found.';
    
    }

} else {
    
  echo 'This access is not valid.';  

}

?>