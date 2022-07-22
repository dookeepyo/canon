$(document).ready(function(){
console.log($(window).scrollTop()); //콘솔창으로 스크롤 상단px값을 확인하려고 썻음
// 2611





  AOS.init();
  // sec-1 스와이퍼
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let controller = new ScrollMagic.Controller();
  let timeline = new TimelineMax();

  timeline
  .to(".img1", 100, { y: -1300 })
  .fromTo(".img1", { opacity: 1 }, { opacity: 0, duration: 3 })
  .to(".img2", 100, { y: -1900 })
  .fromTo(".img2", { opacity: 1 }, { opacity: 0, duration: 3 })
  .to(".img3", 100, { y: -1500 })
  .fromTo(".img3", { opacity: 1 }, { opacity: 0, duration: 50})
  // .fromTo(".bg1", { y: -30 }, { y: 0, duration: 50 }, "-=10")
  // .to(".content", 100, { top: "0%" }, "-=10")

  let scene = new ScrollMagic.Scene({
    triggerElement: ".parallex",
    duration: "600%",
    triggerHook: 0,
  })
    .setTween(timeline)
    .setPin(".parallex")
    // 여기서부터 고정
    .addTo(controller)

    // 스크롤이벤또
    $(window).scroll(function(){
      // console.log('안뇽'); < 콘솔창으로 안뇽으로 스크롤 확인하려고 잠시 썻음;

      //console.log($(window).scrollTop()); //콘솔창으로 스크롤 상단px값을 확인하려고 썻음


      // 조건문걸기
      const sct = $(window).scrollTop();
      if(sct >= 2611){
        $('.title1-go').addClass('active');
        $('.titlel2-go').addClass('active');
        $('.title1-1').addClass('active');
        $('.title1-2').addClass('active');
        $('.title1-3').addClass('active');
        $('.title1-4').addClass('active');
        $('.title1-5').addClass('active');
        $('.title1-6').addClass('active');
        $('.title1-7').addClass('active');
        $('.title1-8').addClass('active');
        $('.title1-9').addClass('active');
        $('.title1-10').addClass('active');
        $('.title1-11').addClass('active');
        $('.title-b').addClass('active');
        $('.title2-1').addClass('active');
        $('.title2-2').addClass('active');
        $('.title2-3').addClass('active');
        $('.title2-4').addClass('active');
        $('.title2-5').addClass('active');
        $('.title2-6').addClass('active');
        $('.title2-7').addClass('active');
        $('.title2-8').addClass('active');
        $('.title2-9').addClass('active');
        $('.title2-10').addClass('active');
        $('.title2-11').addClass('active');
        $('.title2-12').addClass('active');
        $('.title2-13').addClass('active');
      }


  });


  open_chatroom();
  function open_chatroom(){
    var windowWidth = $( window ).width();
    if(windowWidth <= 959) {   

      $('.icon-menu').click(function(){
          $('.header-m1').css({
            'display':'block',
            // 고정부분
            'position':'fixed',
            'z-index':'9999'
          });
      });
      $('.ckuck-m').click(function(){
        $('.header-m1').css({
          'display':'none',
          // 고정부분
          'position':'static',
          'z-index':''


        });

    });
  

    
    
    
    
      
    }
  }


}); //END