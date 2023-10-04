//nav
//열기
$("#navi_view").click(function (e) {
  e.preventDefault();
  $("#navi").css({ display: "block" });
});

//닫기
$("#close").click(function (e) {
  e.preventDefault();
  $("#navi").css({ display: "none" });
});

//menu1
//열기 닫기
/* let status = true;
$("#menu1").click(function (e) {
  e.preventDefault();
  if (status) {
    $("#visit").css({ display: "block" });
  } else {
    $("#visit").css({ display: "none" });
  }
  status = !status;
}); */

//menu2
//열기 닫기
/* $("#menu2").click(function (e) {
  e.preventDefault();
  if (status) {
    $("#find").css({ display: "block" });
  } else {
    $("#find").css({ display: "none" });
  }
  status = !status;
}); */

//menu2
//열기 닫기
/* $("#menu3").click(function (e) {
  e.preventDefault();
  if (status) {
    $("#now").css({ display: "block" });
  } else {
    $("#now").css({ display: "none" });
  }
  status = !status;
}); */

$(".navi2").css({ display: "none" });
$(".gnb ul li").click(function (e) {
  e.preventDefault(); // e.preventDefault();는 a링크 클릭시 #으로 안넘어가게 하는 코드. funcion (e) {} -> e를 꼭 넣어줘야함!!!
  let i = $(this).index();
  console.log(i);
  //x if ($(".menu ul li").hasClass("on")) {
  if (
    $(this).find("a").hasClass("on") &&
    $(".navi2").eq(i).css("display") == "block"
  ) {
    $(".navi2").stop().slideUp();
    $(".gnb ul li a").removeClass("on");
  } else {
    //$(".navi2").eq(i).siblings().css({ display: "none" });
    $(".navi2").eq(i).stop().slideDown();
    $(".gnb ul li a").removeClass("on");
    $(".gnb ul li").eq(i).find("a").addClass("on");
  }
});

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
  //centeredSlides: true,
  slidesPerGroup: 1,
  slidesPerGroupAuto: true,
  slidesOffsetBefore: 100,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    //clickable: false,
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

/* INSTAGRAM */
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: "auto",
  spaceBetween: 20,
  //centeredSlides: true, 이거 잠시 주석
  slidesPerGroup: 1,
  slidesPerGroupAuto: true,
  slidesOffsetBefore: 100,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

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
