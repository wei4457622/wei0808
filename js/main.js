$(document).ready(function () {
  var showSkill = false;

  // 顯示、隱藏menu子選單
  $('.dropdown').click(function (event) {
    /* Act on the event */
    event.preventDefault();
    $(event.currentTarget).parent().find('.dropdown-open').slideToggle();

    $(event.currentTarget).parent().siblings().find('.dropdown-open').slideUp();
  });
  // lightbox 效果
  lightbox.option({
    'resizeDuration': 1000,
    'wrapAround': true
  });

  $('.scrollTop').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var targetPos = $(target).offset().top;
    $('html, body').animate({ scrollTop: targetPos }, 1000);

    $('.dropdown-open').slideUp(500);
  });

  /* 按下GoTop按鈕時的事件 */
  $('#gotop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
    return false;
  });
  
  // 核心滾動視差
  $(window).scroll(function () {
    /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    if ($(this).scrollTop() > 400) {
      $('#gotop').fadeIn();
    } else {
      $('#gotop').fadeOut();
    }

    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    // console.log(scrollPos, windowHeight);

    // progress bar
    var skillTop = $('#skills').position().top;
    // console.log('skillTop', skillTop);
    // !showSkill = 條件判斷，只讓它執行一次
    if (skillTop <= (scrollPos + windowHeight / 2) && !showSkill) {
      showSkill = true;
      // 所有滿足條件的執行
      $('#skills .progress-bar').each(function () {
        var thisValue = $(this).data('progress');
        // console.log('thisValue', thisValue);
        $(this).css('width', thisValue + '%');
      });
    }

    // animated
    // 動態加上滾動效果
    $('.animated').each(function () {
      var thisPos = $(this).offset().top;
      if ((windowHeight + scrollPos) >= thisPos) {
        $(this).addClass('fadeIn');
      }
    });

    // bg scroll
    // 根據滾動的座標動態更改圖或元素位置
    $('#profiles').css('background-position-y', -(scrollPos / 2) + 'px')
    $('#header-ele').css('transform', 'translateY( ' + (scrollPos / 2) + 'px )')
  });





  
});

// nivo slider客製
$(window).on('load', function () {
  $('#slider').nivoSlider({
    effect: 'fade',                 // Specify sets like: 'fold,fade,sliceDown' 
    slices: 15,                       // For slice animations 
    boxCols: 8,                       // For box animations 
    boxRows: 4,                       // For box animations 
    animSpeed: 500,                   // Slide transition speed 
    pauseTime: 3000,                  // How long each slide will show 
    startSlide: 0,                    // Set starting Slide (0 index) 
    directionNav: true,               // Next & Prev navigation 
    controlNav: true,                 // 1,2,3... navigation 
    controlNavThumbs: false,          // Use thumbnails for Control Nav 
    pauseOnHover: true,               // Stop animation while hovering 
    manualAdvance: false,             // Force manual transitions 
    prevText: 'Prev',                 // Prev directionNav text 
    nextText: 'Next',                 // Next directionNav text 
    randomStart: false,               // Start on a random slide 
    beforeChange: function () { },       // Triggers before a slide transition 
    afterChange: function () { },        // Triggers after a slide transition 
    slideshowEnd: function () { },       // Triggers after all slides have been shown 
    lastSlide: function () { },          // Triggers when last slide is shown 
    afterLoad: function () { }           // Triggers when slider has loaded 
  });
});