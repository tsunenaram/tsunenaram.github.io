

var slider;
var sliderFlag = false;

◆タブレット以下も1行で表示させたい場合は下記のみの記述でOK
$('.slider').bxSlider({
touchEnabled:false,
mode: 'vertical',
controls: false,
auto: 'true',
pager: false
});

