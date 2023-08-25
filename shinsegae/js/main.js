// submenu 스크립트
let subMenu = document.querySelectorAll(".submenu");
let gnb = document.querySelectorAll(".gnb ul li a");
let lnb = document.querySelectorAll(".lnb");

gnb.forEach(function (item, keys) {
  item.onmouseenter = function (e) {
    let j = Array.from(gnb).indexOf(e.target);
    function others(item) {
      return item !== j;
    }
    let otherItem = Array.from(subMenu).filter(others);
    otherItem.forEach(function (item) {
      item.style.height = "0px";
      item.style.opacity = "0";
    });

    lnb.forEach(function () {
      let subht = lnb[j].offsetHeight;
      console.log("j : " + j);
      subMenu[j].style.height = subht + "px";
      subMenu[j].style.opacity = "1";
      subMenu[j].classList.add("active2");
    });

    item.onmouseleave = function () {
      for (let i = 0; i <= 6; i++) {
        subMenu[i].style.height = 0 + "px";
        subMenu[j].classList.remove("active2");
      }
    };
  };
});

subMenu.forEach(function (item, keys) {
  item.onmouseenter = function (e) {
    let j = Array.from(subMenu).indexOf(e.target);
    lnb.forEach(function () {
      let subht = lnb[j].offsetHeight;
      console.log("subht : " + subht);
      subMenu[j].style.height = subht + "px";
      subMenu[j].style.opacity = "1";
      subMenu[j].classList.add("active2");
    });

    gnb[j].classList.add("on", "active");
  };

  item.onmouseleave = function (e) {
    for (let i = 0; i <= 6; i++) {
      subMenu[i].style.height = 0 + "px";
      subMenu[i].classList.remove("active2");
    }
    gnb[keys].classList.remove("on", "active");
  };
});

// visual
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  //centeredSlides: true,
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
});

// Art & Culture
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Art & Culture 이전 / 다음 버튼
document.getElementById("btn_prev").onmouseenter = function () {
  document.querySelectorAll(".control svg")[0].classList.add("on");
};
document.getElementById("btn_prev").onmouseleave = function () {
  document.querySelectorAll(".control svg")[0].classList.remove("on");
};
document.getElementById("btn_next").onmouseenter = function () {
  document.querySelectorAll(".control svg")[1].classList.add("on");
};
document.getElementById("btn_next").onmouseleave = function () {
  document.querySelectorAll(".control svg")[1].classList.remove("on");
};

// #Shinsegae Brand
var swiper = new Swiper(".mySwiper2", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// #Shinsegae Brand 이전 / 다음 버튼
document.getElementById("btn_prev2").onmouseenter = function () {
  document.querySelectorAll(".control_2 svg")[0].classList.add("on");
};
document.getElementById("btn_prev2").onmouseleave = function () {
  document.querySelectorAll(".control_2 svg")[0].classList.remove("on");
};
document.getElementById("btn_next2").onmouseenter = function () {
  document.querySelectorAll(".control_2 svg")[1].classList.add("on");
};
document.getElementById("btn_next2").onmouseleave = function () {
  document.querySelectorAll(".control_2 svg")[1].classList.remove("on");
};
