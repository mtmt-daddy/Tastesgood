(function($){

   

    $(function(){
        $('.btn1').click(function(){
        $('.result').empty().append('検索しています。しばらくお待ちください。');
        
        var menu = $(this).text(); //検索ワード
        navigator.geolocation.getCurrentPosition(
            function(position){
                var api = 'http://api.gnavi.co.jp/ouen/ver1/PhotoSearch/?';
                var key = '9a9a0182a81a337a3cdae88e60b0be3d';
                var ran = 2;
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                var hit = 20;
                var page = Math.floor( Math.random() * 3 + 1 );
                // document.getElementById("sample").innerHTML = page;
                
                var request = api + 'keyid=' + key + '&latitude=' + lat + '&longitude=' + lon + '&range=' + ran + '&hit_per_page=' + hit + '&offset_page=' + page;
                
                $.ajax({
                    url: 'import.php',
                    type: 'post',
                    cache : false,
                    data: {
                            'req': request
                        },
                            success: function(xml,status){
                        $('#map').empty().append('<img src="http://maps.google.com/maps/api/staticmap?center='+lat+','+lon+'&markers='+lat+','+lon+'&zoom=13&size=300x300&sensor=true" />');
                        $('.result').empty().append(xml);
                    }
                });
            },null,{enableHighAccuracy: true});//getCurrentPosition 終わり

        return false;
        });

    $('.btn2').click(function(){
        $('.result').empty().append('検索しています。しばらくお待ちください。');
        
        var menu = $(this).text(); //検索ワード
        navigator.geolocation.getCurrentPosition(
            function(position){
                var api = 'http://api.gnavi.co.jp/ouen/ver1/PhotoSearch/?';
                var key = '9a9a0182a81a337a3cdae88e60b0be3d';
                var ran = 3;
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                var hit = 20;
                var page = Math.floor( Math.random() * 10 + 1 );
                // document.getElementById("sample").innerHTML = page;
                
                var request = api + 'keyid=' + key + '&latitude=' + lat + '&longitude=' + lon + '&range=' + ran + '&hit_per_page=' + hit + '&offset_page=' + page;
                
                $.ajax({
                    url: 'import.php',
                    type: 'post',
                    cache : false,
                    data: {
                            'req': request
                        },
                            success: function(xml,status){
                        $('#map').empty().append('<img src="http://maps.google.com/maps/api/staticmap?center='+lat+','+lon+'&markers='+lat+','+lon+'&zoom=13&size=300x300&sensor=true" />');
                        $('.result').empty().append(xml);
                    }
                });
            },null,{enableHighAccuracy: true});//getCurrentPosition 終わり

        return false;
        });

    $('.btn3').click(function(){
        $('.result').empty().append('検索しています。しばらくお待ちください。');
        
        var menu = $(this).text(); //検索ワード
        navigator.geolocation.getCurrentPosition(
            function(position){
                var api = 'http://api.gnavi.co.jp/ouen/ver1/PhotoSearch/?';
                var key = '9a9a0182a81a337a3cdae88e60b0be3d';
                var ran = 4;
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                var hit = 20;
                var page = Math.floor( Math.random() * 20 + 1 );
                // document.getElementById("sample").innerHTML = page;
                
                var request = api + 'keyid=' + key + '&latitude=' + lat + '&longitude=' + lon + '&range=' + ran + '&hit_per_page=' + hit + '&offset_page=' + page;
                
                $.ajax({
                    url: 'import.php',
                    type: 'post',
                    cache : false,
                    data: {
                            'req': request
                        },
                            success: function(xml,status){
                        $('#map').empty().append('<img src="http://maps.google.com/maps/api/staticmap?center='+lat+','+lon+'&markers='+lat+','+lon+'&zoom=13&size=300x300&sensor=true" />');
                        $('.result').empty().append(xml);
                    }
                });
            },null,{enableHighAccuracy: true});//getCurrentPosition 終わり

        return false;
        });

var pageTop1 = $(".page-back");
var position = $(".btn1").offset().top;
  pageTop1.click(function () {
    $('body, html').animate({ scrollTop: position }, 500);
    return false;
  });
  $(window).scroll(function () {
    if($(this).scrollTop() >= 200) {
      pageTop1.css( "bottom", "5%" );
    } else {
      pageTop1.css( "bottom", "-10%" );
    }
  });

    });
})(jQuery);