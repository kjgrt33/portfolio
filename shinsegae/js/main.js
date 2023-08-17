// submenu 스크립트
let subMenu = document.querySelectorAll(".menu");
let gnb = document.querySelectorAll(".gnb ul li a");
let lnb = document.querySelectorAll(".lnb>ul>li");
let ht = document.querySelector(".menu").offsetHeight;
gnb.forEach(function (item, keys) {
  //console.log(keys);

  item.onmouseenter = function (e) {
    let j = Array.from(gnb).indexOf(e.target);
    subMenu[j].style.height = ht + "px";
  };

  item.onmouseleave = function () {
    subMenu.forEach(function (item, keys) {
      item.style.height = 0 + "px";
    });
  };
});

subMenu.forEach(function (item, keys) {
  item.onmouseenter = function (e) {
    let j = Array.from(subMenu).indexOf(e.target);
    this.style.height = ht + "px";
    gnb[j].classList.add("on", "active");
  };

  item.onmouseleave = function () {
    this.style.height = 0 + "px";
    for (let i = 0; i <= 6; i++) {
      gnb[i].classList.remove("on", "active");
    }
  };
});
