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
    $("html, body").animate({ scrollTop: arr[i] }, 800);
  });
});
