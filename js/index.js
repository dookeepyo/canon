
$(document).ready(function(){
    console.log($(window).scrollTop());
    // 콘솔창으로 스크롤 상단px값을 확인하려고 썻음\

    var swiper1 = new Swiper(".mySwiper1", {
        loop: true, // 무한 루프 옵션
        navigation: {
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
        },
        autoplay: { // 5초마다 슬라이드 자동 변경
            delay: 3000, // 5초 설정
            disableOnInteraction: false, // 유저의 스와이프 동작 후에도 자동 재생 계속
        },
        effect: 'fade', // 페이드 인아웃 효과 설정
        fadeEffect: {
            crossFade: true
        },
        speed: 1000, // 슬라이드 변경 시 0.5초 설정
    });

    $('.swiper-slide').hover(
        function() { // mouseenter 이벤트에 해당하는 부분
            swiper1.autoplay.stop();
        },
        function() { // mouseleave 이벤트에 해당하는 부분
            swiper1.autoplay.start();
        }
    );
    
    $(window).on('scroll', function() {
        var bannerOffset = $('.banner').offset().top + $('.banner').outerHeight();  // banner의 하단 위치
        var viewportBottom = $(window).scrollTop() + $(window).height();  // 뷰포트의 하단 위치
    
        // banner의 하단이 뷰포트의 하단보다 위에 있다면
        if(bannerOffset <= viewportBottom) {
            $('.banner_area1_slide').addClass('active');
        } else {
            $('.banner_area1_slide').removeClass('active');
        }
    });
    

    $(document).ready(function() {
        $(".section_1_title_but").on("click", function() {
            // 모든 '.section_1_title_but' 에서 'click' 클래스 제거
            $(".section_1_title_but").removeClass("click");
            
            // 현재 클릭한 요소에만 'click' 클래스 추가
            $(this).addClass("click");
    
            if($(this).hasClass("section_1_title_but2")) {
                // '.section_1_title_but2' 클릭 시
                $(".section_1_refresh_p2").removeClass("slide_1").addClass("slide_2");
                $(".section_1_slide_1").removeClass("active");
                $(".section_1_slide_2").addClass("active");
            } 
            else if($(this).hasClass("section_1_title_but1")) {
                // '.section_1_title_but1' 클릭 시
                $(".section_1_refresh_p2").removeClass("slide_2").addClass("slide_1");
                $(".section_1_slide_2").removeClass("active");
                $(".section_1_slide_1").addClass("active");
            }
        });
    });
    
    

    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 5,     // 한 번에 보여질 슬라이드 수
        slidesPerGroup: 5,   // 한 번의 슬라이딩 동작으로 넘어갈 슬라이드 수
        spaceBetween: 36,    // 슬라이드 간의 간격을 30px로 설정
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
    });
    

    $(document).ready(function() {
        $(".section_1_refresh_p2.slide_1").on("click", function() {
            // .section_1_slide_item 요소들을 배열로 가져옴
            var slideItems = $(".swiper-wrapper .section_1_slide_item1").get();
            
            // 배열 요소를 랜덤하게 섞음 (Fisher-Yates shuffle 알고리즘 사용)
            for (var i = slideItems.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = slideItems[i];
                slideItems[i] = slideItems[j];
                slideItems[j] = temp;
            }
    
            // 랜덤하게 섞인 .section_1_slide_item 배열을 각 .section_1_slide_items에 다시 추가
            $(".swiper-wrapper .section_1_slide_items1").each(function(index) {
                $(this).append(slideItems[index]);
            });
    
            // Swiper 객체를 업데이트
            swiper2.update();
        });
    });


    
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 5,     // 한 번에 보여질 슬라이드 수
        slidesPerGroup: 5,   // 한 번의 슬라이딩 동작으로 넘어갈 슬라이드 수
        spaceBetween: 36,    // 슬라이드 간의 간격을 30px로 설정
        navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3",
        },
    });

    $(document).ready(function() {
        $(".section_1_refresh_p2.slide_2").on("click", function() {
            // .section_1_slide_item 요소들을 배열로 가져옴
            var slideItems = $(".swiper-wrapper .section_1_slide_item2").get();
            
            // 배열 요소를 랜덤하게 섞음 (Fisher-Yates shuffle 알고리즘 사용)
            for (var i = slideItems.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = slideItems[i];
                slideItems[i] = slideItems[j];
                slideItems[j] = temp;
            }
    
            // 랜덤하게 섞인 .section_1_slide_item 배열을 각 .section_1_slide_items에 다시 추가
            $(".swiper-wrapper .section_1_slide_items2").each(function(index) {
                $(this).append(slideItems[index]);
            });
    
            // Swiper 객체를 업데이트
            swiper3.update();
        });
    });
    
    $(document).ready(function() {
        // 팝업창 표시
        $('.banner_area1_slide_butbox_item_popup').on('click', function() {
            $('.banner_popup').fadeIn(300); // 0.3초 동안 부드럽게 표시
            $('body').addClass('no-scroll'); // 스크롤 차단
        });
    
        // 팝업창 닫기 버튼을 클릭할 때 팝업창 숨기기
        $('.close_popup').on('click', function() {
            $('.banner_popup').fadeOut(300); // 0.3초 동안 부드럽게 숨김
            $('body').removeClass('no-scroll'); // 스크롤 차단 해제
        });
    });
    

}); //끝

