
$(document).ready(function(){
    console.log($(window).scrollTop());
    // 콘솔창으로 스크롤 상단px값을 확인하려고 썻음\


    $(document).ready(function(){
        var hoverTimer;
    
        $(".header_menu_item").hover(
            function(){
                var subMenu = $(this).find(".header_menu_item_sub");
                subMenu.addClass("active");
                
                // 스톱 메소드를 사용하여 hover 이벤트 중단
                clearTimeout(hoverTimer);
            },
            function(){
                var subMenu = $(this).find(".header_menu_item_sub");
                
                // 특정 시간 후에 hover 이벤트가 발생하지 않도록 설정
                hoverTimer = setTimeout(function(){
                    subMenu.removeClass("active");
                }, 300); // 300 밀리초 (0.3초) 이후에 서브메뉴 숨김
            }
        );
        
        // 메뉴 아이템에서 벗어날 때 .header_menu_item_sub 의 .active 클래스 제거
        $(".header_menu_item").mouseleave(function(){
            var subMenu = $(this).find(".header_menu_item_sub");
            subMenu.removeClass("active");
        });
    });

    $(document).ready(function(){
        $(".hamburger_but").click(function(){
            $(this).toggleClass("active");
            $(".hamburger_submenu").toggleClass("active");
            $(".header_menu").toggleClass("active");
        });
    });
    
    $(document).ready(function(){
        $(".hamburger_submenu_item").hover(
            function(){
                // 호버 시작 시
                $(this).children(".hamburger_submenu_item_p_box").addClass("active");
            },
            function(){
                // 호버 종료 시
                $(this).children(".hamburger_submenu_item_p_box").removeClass("active");
            }
        );
    });

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
    
    $(document).ready(function(){
        $(".section_2_item_ck_item").click(function(){
            var clickedClass = $(this).attr("class").split(" ")[1];

            // 모든 항목에서 active 클래스 제거
            $(".section_2_item_ck_item").removeClass("active");

            // 클릭한 항목에만 active 클래스 추가
            $(this).addClass("active");

            // 모든 섹션 항목에서 클래스 제거
            $(".section_2_item_pa").removeClass("active");

            // 해당 클래스를 가진 섹션 항목에 active 클래스 추가
            $(".section_2_item_pa." + clickedClass).addClass("active");

            // 추가로 섹션 클래스에 active를 추가하는 부분
            if (clickedClass === "section_2_item_ck_item_in") {
                $(".section_2_item_pa.section_2_item_in").addClass("active");
                $(".section_2_title").text("Instagram");
            } else if (clickedClass === "section_2_item_ck_item_fb") {
                $(".section_2_item_pa.section_2_item_fb").addClass("active");
                $(".section_2_title").text("Facebook");
            } else if (clickedClass === "section_2_item_ck_item_tw") {
                $(".section_2_item_pa.section_2_item_tw").addClass("active");
                $(".section_2_title").text("Twitter");
            }
        });
    });

    var swiper4 = new Swiper(".mySwiper4", {
        direction: "vertical", // 세로 슬라이드 설정
        loop: true, // 무한 루프
        autoplay: {
          delay: 3000, // 2초마다 슬라이드 변경
        },
    });

}); //끝

