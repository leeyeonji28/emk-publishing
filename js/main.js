$(document).ready(function () {
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});
$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling: true,
        scrollHorizontally: true,
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Performance page', 'Notice page', 'Goods page', 'Audition page', 'Footer'],
        scrollingSpeed: 1000,
        scrollBar: true,

        onLeave: function (origin, destination, direction) { //페이지를 떠날 때
            if (origin.index == 0) {
                $('#fullpage .section01 .wrap .tit').animate({
                    opacity: 0
                }, 500);
                $('#fullpage .section01 .wrap .slider').animate({
                    opacity: 0
                }, 500);
            }
            if (origin.index == 1) {
                $('#fullpage .section02 .wrap .tit').animate({
                    opacity: 0
                }, 300);
                $('#fullpage .section02 .wrap .notice').slideUp(500);
                $('#fullpage .section02 .wrap .news').slideUp(500);
            }
            if (origin.index == 2) {
                $('#fullpage .section03 .wrap .tit').animate({
                    opacity: 0
                }, 500);
                $('#fullpage .section03 .wrap ul li').stop().delay(400).animate({
                    left: '-50vw', opacity: 0
                }, 500);
            }
            if (origin.index == 3) {
                $('#fullpage .section04 .wrap .tit').animate({
                    opacity: 0
                }, 300);
                $('#fullpage .section04 .wrap .apply').slideUp(500);
                $('#fullpage .section04 .wrap .apply').animate({
                    opacity: 0
                }, 300);
            }
        },
        afterLoad: function (origin, destination, direction) { //페이지에 도착 할 때
            if (destination.index == 0) {
                $('#fullpage .section01 .wrap .tit').animate({
                    opacity: 1
                }, 300);
                $('#fullpage .section01 .wrap .slider').animate({
                    opacity: 1
                }, 300);
            }
            if (destination.index == 1) {
                $('#fullpage .section02 .wrap .tit').animate({
                    opacity: 1
                }, 300);
                $('#fullpage .section02 .wrap .notice').slideDown(100);
                $('#fullpage .section02 .wrap .notice').animate({
                    opacity: 1
                }, 300);
                $('#fullpage .section02 .wrap .news').slideDown(100);
                $('#fullpage .section02 .wrap .news').animate({
                    opacity: 1
                }, 300);
            }
            if (destination.index == 2) {
                $('#fullpage .section03 .wrap .tit').animate({
                    opacity: 1
                }, 300);
                $('#fullpage .section03 .wrap ul li:first-child').stop().delay(400).animate({
                    left: '0vw', opacity: 1
                }, 400);
                $('#fullpage .section03 .wrap ul li:nth-child(2)').stop().delay(200).animate({
                    left: '0vw', opacity: 1
                }, 400);
                $('#fullpage .section03 .wrap ul li:last-child').stop().animate({
                    left: '0vw', opacity: 1
                }, 400);
            }
            if (destination.index == 3) {
                $('#fullpage .section04 .wrap .tit').animate({
                    opacity: 1
                }, 300);
                $('#fullpage .section04 .wrap .apply').slideDown(100);
                $('#fullpage .section04 .wrap .apply').animate({
                    opacity: 1
                }, 300);
            }
        }
    });
});

//wow.js
$(document).ready(function () {
    new WOW().init();
});


//스크롤 버튼
$(document).ready(function () {
    $('#scroll_btn>button.btn_up').click(function () {
        fullpage_api.moveSectionUp();
    });
    $('#scroll_btn>.btn_down').click(function () {
        fullpage_api.moveSectionDown();
    });
});

//스크롤 넘버
$(document).ready(function () {
    $(window).on('hashchange', function () {
        var hashtagname = location.hash;
        var scrollNunber = $('#scroll_nun');
        if (hashtagname == "#firstPage") {
            scrollNunber.text("01")
        } else {
            if (hashtagname == "#secondPage") {
                scrollNunber.text("02")
            }
            if (hashtagname == "#3rdPage") {
                scrollNunber.text("03")
            }
            if (hashtagname == "#4thPage") {
                scrollNunber.text("04")
            }
            if (hashtagname == "#5thPage") {
                scrollNunber.text("05")
            }
        }
    });
});

// 인트로 페이지
$(document).ready(function(){
    var skip = $('#intro>.skip'),
        video = $('#intro>.intro_video'),
        intro = $('#intro');
    skip.click(function(){
        intro.fadeOut(350);
    });
    setTimeout(function(){
        intro.fadeOut(350);
    },59000);
});