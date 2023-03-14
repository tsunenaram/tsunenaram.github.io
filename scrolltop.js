

// デフォルトではボタンを非表示にする
$(".scroll-top").hide();

// 100px以上スクロールしたらボタンを表示させ、
// それ以下の場合は非表示にする
$(window).scroll(function() {
  if($(this).scrollTop() > 100) {
    $(".scroll-top").fadeIn();
  } else {
    $(".scroll-top").fadeOut();
  }
});

// ボタンをクリックしたらページトップへ0.5秒で移動する
$(".scroll-top").click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 500);
  return false;
});

