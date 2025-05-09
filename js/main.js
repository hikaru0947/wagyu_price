$(function() {
  // スクロールでボタン表示
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#page-top').fadeIn();
    } else {
      $('#page-top').fadeOut();
    }
  });

  // スムーススクロール
  $('#page-top a').click(function(e) {
    e.preventDefault();
    var position = 0;
    var speed = 500;
    $('html, body').animate({
      scrollTop: position,
    }, speed, 'swing');
    return false;
  });
});
