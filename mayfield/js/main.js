// menu 버튼 움직임 스크립트
document.getElementById("menu").onclick = function () {
  document.getElementsByTagName("span")[0].classList.toggle("bar1");
  document.getElementsByTagName("span")[1].classList.toggle("bar2");
  document.getElementsByTagName("span")[2].classList.toggle("bar3");
  document.getElementsByTagName("nav")[0].classList.toggle("nav_bg");
};

// visual
/*var swiper1 = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});*/

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
