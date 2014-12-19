<?php
if(isset($_POST["req"])){
    $xml = simplexml_load_file(urldecode($_POST["req"]));
    if(!$xml->photo){
        echo '見つかりませんでした';
    } else {
            // echo $xml->hit_per_page;
        foreach($xml->photo as $val){
            echo '<div class="item">';
            echo '<a href="'.$val->shop_url.'">';
            // echo $val->shop_name;
            // echo '</a><br />';
            echo '<img src="'.$val->image_url->url_250.'">';
            echo '</a><br />';

            echo '</div>';
        }
    }
}
?>