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

// TOP 버튼
window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  console.log(ht);
  if (ht > 2000) {
    document.getElementsByClassName("btn_top")[0].style.opacity = "1";
  } else {
    document.getElementsByClassName("btn_top")[0].style.opacity = "0";
  }
};
document.getElementsByClassName("btn_top")[0].onclick = function () {
  document.documentElement.scrollTop = "0";
};
