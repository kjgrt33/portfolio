// nav
$(function () {
  let arr = [
    $("section").eq(0).offset().top,
    $("section").eq(1).offset().top,
    $("section").eq(2).offset().top,
    $("section").eq(3).offset().top,
  ];
  console.log(arr);

  $("nav ul li a").click(function (e) {
    e.preventDefault();
    let i = $(this).parent().index();
    $("html, body").animate({ scrollTop: arr[i] - 60 }, 1000);
  });
});

//popup
//열기
$("#popup_view").click(function (e) {
  e.preventDefault();
  $("#popup").css({ display: "block" });
  $("body").css({ overflow: "hidden" });
});

//닫기
$("#close").click(function (e) {
  e.preventDefault();
  $("#popup").css({ display: "none" });
  $("body").css({ overflow: "visible" });
});

// TOP 버튼
window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  console.log(ht);
  if (ht > 1000) {
    document.getElementsByClassName("btn_top")[0].style.opacity = "1";
  } else {
    document.getElementsByClassName("btn_top")[0].style.opacity = "0";
  }
};
document.getElementsByClassName("btn_top")[0].onclick = function () {
  document.documentElement.scrollTop = "0";
};
