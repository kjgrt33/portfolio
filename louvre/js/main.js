// visual
const video = document.getElementById("myVideo");
const pauseButton = document.getElementById("pauseButton");

// 버튼을 클릭할 때 동영상을 일시 정지 또는 다시 재생
pauseButton.addEventListener("click", function (e) {
  e.preventDefault();
  pauseButton.classList.toggle("on");
  if (video.paused) {
    video.play(); // 일시 정지된 동영상을 재생
  } else {
    video.pause(); // 동영상을 일시 정지
  }
});

// IN THE NEWS
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// LOUVRE AT HOME
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// YOU WANT TO
let img_src = $("#b_pic img").attr("src");

$(".b_list li").hover(
  function () {
    let i = $(this).index(); // index는 0부터 시작

    $("#b_pic img")
      .attr("src", img_src.replace(img_src.substr(-5, 1), i + 2)) // index는 0부터 시작이므로 +2로
      .attr("alt", "banner" + i);
  },
  function () {
    $("#b_pic img").attr("src", "images/banner1.jpg").attr("alt", "banner1");
  }
);

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: "auto",
  //loop: true,
  spaceBetween: 20,
  //centeredSlides: true, 이거 잠시 주석

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
