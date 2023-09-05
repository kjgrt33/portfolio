// menu 버튼 움직임 스크립트
document.getElementById("menu").onclick = function () {
  document.getElementsByTagName("span")[0].classList.toggle("bar1");
  document.getElementsByTagName("span")[1].classList.toggle("bar2");
  document.getElementsByTagName("span")[2].classList.toggle("bar3");
  document.getElementsByTagName("nav")[0].classList.toggle("nav_bg");
};

$(function () {
  let bg = true;
  $("#menu").click(function () {
    if (bg) {
      $("header").css({
        background: "#122223",
        boxShadow: "none",
      });
      $("header ul li a").css("color", "#fff");
      $("header ul #menu a span").css("background", "#fff");
      $(".logo a img").attr("src", "../images/logo_w.svg");
    } else {
      $("header").css({
        background: "#fff",
        boxShadow: "0px 3px 6px 0px rgba(0, 0, 0, 0.03)",
      });
      $("header ul li a").css("color", "#222");
      $("header .util_right ul li:nth-child(2) a").css("color", "#014d33");
      $("header ul #menu a span").css("background", "#000");
      $(".logo a img").attr("src", "../images/logo.svg");
    }
    bg = !bg;
  });
});
