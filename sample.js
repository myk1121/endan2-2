$(function(){
// ===============
// ヘッダーメニュー
// ===============
  $('.menu').on('click',function(){
    $('.menu_line').toggleClass('active');
    $('.gnav').fadeToggle();
  });

// ===============
// トップへ戻るボタン
// ===============
  var pagetop = $('#pagetop');

  // ボタン非表示
  pagetop.hide();

  // 120px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
      pagetop.fadeIn();
    } else {
          pagetop.fadeOut();
    }
  });
  // クリックしたら0.5sかけてTOPへ戻る
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
      

});
