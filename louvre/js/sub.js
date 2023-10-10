//nav
//열기
$("#navi_view").click(function (e) {
  e.preventDefault();
  $("#navi").css({ display: "block" });
  $(".navi2").css({ display: "block" });
});

//닫기
$("#close").click(function (e) {
  e.preventDefault();
  $("#navi").css({ display: "none" });
  $(".navi2").css({ left: "-100%" });
  $("html, body").css("overflow", "visible");
});

// navi2
$(".navi2").css({ left: "-100%" });
$(".gnb ul li").click(function (e) {
  e.preventDefault();
  let i = $(this).index();
  console.log(i);
  if ($(this).find("a").hasClass("on") == false) {
    $(".navi2")
      .eq(i)
      .animate({ left: "680px" }, 300, function () {
        $(this).css({ zIndex: "8" });
      });
    $(".navi2")
      .eq(i)
      .siblings()
      .css({ zIndex: "1" })
      .animate({ left: "0" }, 300);
    $(".gnb ul li a").removeClass("on");
    $(".gnb ul li").eq(i).find("a").addClass("on");
  } else {
    $(".gnb ul li a").removeClass("on");
    $(".navi2").eq(i).css({ zIndex: "1" }).animate({ left: "0" }, 300);
  }
});

//nav 스크롤
/* let wd = $(window).width();
if (wd <= 705) {
  $("html, body").css("overflow", "hidden");
}
$(window).resize(function () {
  let wd = $(window).width();
  if (wd <= 705) {
    $("html, body").css("overflow", "hidden");
  }
}); */

// TOP 버튼
window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  console.log(ht);
  if (ht > 50) {
    document.getElementsByClassName("btn_top")[0].style.opacity = "1";
  } else {
    document.getElementsByClassName("btn_top")[0].style.opacity = "0";
  }
};
document.getElementsByClassName("btn_top")[0].onclick = function () {
  document.documentElement.scrollTop = "0";
};
