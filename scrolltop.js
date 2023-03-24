// ボタンをクリックしたらページトップへ0.5秒で移動する
$(".scroll-top").click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 500);
  return false;
});

