//slick
$(document).ready(function () {
  $(".center").slick({
    //dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
  $(".lazy").slick({
    lazyLoad: "ondemand",
    infinite: true,
  });
});

//fullpage
$(document).ready(function () {
  $("#fullpage").fullpage({
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    autoScrolling: true,
    scrollHorizontally: true,
    //anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage'],
    navigation: true,
    navigationPosition: "left",
    navigationTooltips: [
      "Monte Cristo",
      "Multimedia page",
      "Character page",
      "Music page",
      "D-day page",
    ],
    scrollingSpeed: 1000,
    responsiveWidth: 900,
    scrollBar: true,

    onLeave: function (origin, destination, direction) {
      //페이지를 떠날 때
      if (origin.index == 0) {
        $("#fullpage .section01 div").animate(
          {
            opacity: 0,
          },
          500
        );
      }
      if (origin.index == 1) {
        $("#fullpage .section02 .wrap").animate(
          {
            opacity: 0,
          },
          500
        );
      }
      if (origin.index == 2) {
        $("#fullpage .section03 .wrap").animate(
          {
            opacity: 0,
          },
          500
        );
      }
      if (origin.index == 3) {
        $("#fullpage .section04 .wrap").animate(
          {
            opacity: 0,
          },
          500
        );
      }
      if (origin.index == 4) {
        $("#fullpage .section05 .wrap").animate(
          {
            opacity: 0,
          },
          500
        );
      }
    },
    afterLoad: function (origin, destination, direction) {
      //페이지에 도착 할 때
      if (destination.index == 0) {
        $("#fullpage .section01 div").animate(
          {
            opacity: 1,
          },
          500
        );
      }
      if (destination.index == 1) {
        $("#fullpage .section02 .wrap").animate(
          {
            opacity: 1,
          },
          500
        );
      }
      if (destination.index == 2) {
        $("#fullpage .section03 .wrap").animate(
          {
            opacity: 1,
          },
          500
        );
      }
      if (destination.index == 3) {
        $("#fullpage .section04 .wrap").animate(
          {
            opacity: 1,
          },
          500
        );
      }
      if (destination.index == 4) {
        $("#fullpage .section05 .wrap").animate(
          {
            opacity: 1,
          },
          500
        );
      }
    },
  });
});

//wow.js
$(document).ready(function () {
  new WOW().init();
});

//music tab menu
$(document).ready(function () {
  var tabbtn = $(".music_list>.music_btn>p"),
    tabcont = $(".music_list>.list>ul");

  tabcont.hide().eq(0).show();

  tabbtn.click(function (e) {
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    tabbtn.removeClass("on");
    target.addClass("on");
    tabcont.css("display", "none");
    tabcont.eq(index).css("display", "block");
  });
});

//music lp
$(document).ready(function () {
  var musicSite = $(".section04 .wrap>.music>.music_site>p"),
    circle02 = $(".section04 .wrap>.music>.lp>.circle02"),
    circle03 = $(".section04 .wrap>.music>.lp>.circle03"),
    circle04 = $(".section04 .wrap>.music>.lp>.circle04"),
    circle05 = $(".section04 .wrap>.music>.lp>.circle05"),
    circle06 = $(".section04 .wrap>.music>.lp>.circle06");

  musicSite.mouseover(function () {
    circle02.css("transform", "translate(-50%,-50%) rotate(45deg)");
    circle03.css("transform", "translate(-50%,-50%) rotate(280deg)");
    circle04.css("transform", "translate(-50%,-50%) rotate(90deg)");
    circle05.css("transform", "translate(-50%,-50%) rotate(180deg)");
    circle06.css("transform", "translate(-50%,-50%) rotate(0deg)");
  });
  musicSite.mouseleave(function () {
    circle02.css("transform", "translate(-50%,-50%) rotate(300deg)");
    circle03.css("transform", "translate(-50%,-50%) rotate(45deg)");
    circle04.css("transform", "translate(-50%,-50%) rotate(250deg)");
    circle05.css("transform", "translate(-50%,-50%) rotate(40deg)");
    circle06.css("transform", "translate(-50%,-50%) rotate(80deg)");
  });
});

//d-day
$(document).ready(function () {
  var dday = new Date("march 28,2023,09:00:00").getTime();
  setInterval(function () {
    var now = new Date();
    var distance = dday - now;
    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);
    if (s < 10) {
      s = "0" + s;
    }
    $(".section05 .wrap>.day_box>.d_day>.day")
      .html(d)
      .css({ "font-size": "18vh" });
    $(".section05 .wrap>.day_box>.d_day>.hour")
      .html(h)
      .css({ "font-size": "18vh" });
    $(".section05 .wrap>.day_box>.d_day>.minute")
      .html(m)
      .css({ "font-size": "18vh" });
    $(".section05 .wrap>.day_box>.d_day>.second")
      .html(s)
      .css({ "font-size": "18vh" });
  }, 1000);
});
