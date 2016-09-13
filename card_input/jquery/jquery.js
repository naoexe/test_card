// JavaScript Document

$(function(){
    
    $("form")[0].reset();
    
    $("body").addClass("hold_x");
    $("body").addClass("hold_y");
    
    $(".form_block").addClass("hide");
    
    $(".dialog_box_1").addClass("hide");
    $(".dialog_box_2").addClass("hide");
    
    $(".button_box").addClass("hide");
    $(".input_button").addClass("hide");
    $(".submit_button").addClass("hide");
    
    var rarity_c = 0;
    var name_c = 0;
    var series_c = 0;
        
    //カードレアリティの処理
    $(".card_rarity").change(function(){

        if($(".card_rarity").val() == "0"){
            
            //カードレアリティを選択していないとき
            $(".card_rarity").css({"background-color":"#ff8888"});
            
            $(".not_input").removeClass("hide");
            $(".input_button").addClass("hide");
            
            rarity_c = 0;
            
        } else {
            
            $(".card_rarity").css({"background-color":"#ffffff"});
            rarity_c = 1;
            
            if(rarity_c == 1 && name_c == 1 && series_c == 1){
        
                $(".not_input").addClass("hide");
                $(".input_button").removeClass("hide");

            }
            
        }
        
    });
    
    //カードシリーズの処理
    $(".card_series").change(function(){

        if($(".card_series").val() == "0"){
            
            //カードシリーズを選択していないとき
            $(".card_series").css({"background-color":"#ff8888"});
            
            $(".not_input").removeClass("hide");
            $(".input_button").addClass("hide");
            
            series_c = 0;
       
        } else {
            
            $(".card_series").css({"background-color":"#ffffff"});
            series_c = 1;
            
            if(rarity_c == 1 && name_c == 1 && series_c == 1){
        
                $(".not_input").addClass("hide");
                $(".input_button").removeClass("hide");

            }
            
        }
        
    });
    
    //プレースホルダーに表示するテキスト
    var placeholder_name = "カードの名前を入力してください。";
    
    $(".card_name").addClass("placeholder");
    $(".card_name").val(placeholder_name);
    
    //カード名にフォーカスが当たったときの処理
    $(".card_name").focus(function(){

        if($(".card_name").val() == placeholder_name){
            
            //カードの名前が入力されていないとき
            $(".card_name").removeClass("placeholder");
            $(".card_name").val("");
            
            $(".card_name").css({"background-color":"#ffffff"});
            
            $(".not_input").removeClass("hide");
            $(".input_button").addClass("hide");

        } else {
            
            $(".card_name").css({"background-color":"#ffffff"});
            
            
            if(rarity_c == 1 && name_c == 1 && series_c == 1){
        
                $(".not_input").addClass("hide");
                $(".input_button").removeClass("hide");

            }
            
        }
        
    });
    
    //カード名からフォーカスが外れたときの処理
    $(".card_name").blur(function(){

        if($(".card_name").val() == ""){
            
            //カードの名前が入力されていないとき
            $(".card_name").removeClass("placeholder");
            $(".card_name").val(placeholder_name);
            
            $(".card_name").css({"background-color":"#ffffff"});
            
            $(".not_input").removeClass("hide");
            $(".input_button").addClass("hide");
            
            
        } else {
            
            $(".card_name").css({"background-color":"#ffffff"});
            
            
            if(rarity_c == 1 && name_c == 1 && series_c == 1){
        
                $(".not_input").addClass("hide");
                $(".input_button").removeClass("hide");

            }
            
        }
        
    });
    
    //カード名に入力した文字数を数える
    $(".card_name").change(function(){
        
        var text_length = $(".card_name").val().length;
        
        $(".cn_count").html(text_length);
        
        if(text_length == 0 || text_length >= 20){
            
            $(".not_input").removeClass("hide");
            $(".input_button").addClass("hide");
            
            $(".card_name").css({"background-color":"#ff8888"});
            
            $(".not_input").removeClass("hide");
            $(".input_button").addClass("hide");
            
            name_c = 0;
            
        } else {
            
            $(".card_name").css({"background-color":"#ffffff"});
            name_c = 1;
            
            if(rarity_c == 1 && name_c == 1 && series_c == 1){
        
                $(".not_input").addClass("hide");
                $(".input_button").removeClass("hide");

            }
            
        }
        
    });
    
    //[type=text]入力時、リターンボタンでの送信を無効化
    $("input[type=text]").keypress(function(ev) {
        
        if ((ev.which && ev.which === 13) || (ev.keyCode && ev.keyCode === 13)) {
            
            return false;
        
        } else {
            
            return true;
        
        }
        
    });
    
    //『CARDデータを登録するボタン』をクリックしたらダイアログを表示する
    $(".input_button").click(function(){
        
        $(".form_block").removeClass("hide");
        
        $(".dialog_box_1").removeClass("hide");
        $(".dialog_box_2").removeClass("hide");
        $(".input_box_1").addClass("hide");
        
        $("html").addClass("dialog");
        $(".box_0").addClass("dialog");
        
        $(".input_button").addClass("hide");
        $(".button_box").removeClass("hide");
        
        $(".not_submit").addClass("hide");
        $(".submit_button").removeClass("hide");
        
    });
    
    //『キャンセル』ボタンをクリックしたらダイアログを消す
    $(".ng_button").click(function(){
        
        $(".form_block").addClass("hide");
        
        $(".dialog_box_1").addClass("hide");
        $(".dialog_box_2").addClass("hide");
        $(".input_box_1").removeClass("hide");
        
        $("html").removeClass("dialog");
        $(".box_0").removeClass("dialog");
        
        $(".input_button").removeClass("hide");
        $(".button_box").addClass("hide");
        
    });
    
});