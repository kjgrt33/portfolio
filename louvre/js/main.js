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
  //loop: true,
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
  //loop: true,
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
