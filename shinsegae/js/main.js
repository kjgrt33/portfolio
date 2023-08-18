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
    });

    item.onmouseleave = function () {
      for (let i = 0; i <= 6; i++) {
        subMenu[i].style.height = 0 + "px";
      }
    };
  };
});

subMenu.forEach(function (item, keys) {
  item.onmouseenter = function () {
    gnb[keys].classList.add("on", "active");
  };

  item.onmouseleave = function (e) {
    let j = Array.from(subMenu).indexOf(e.target);
    subMenu[j].style.height = 0 + "px";
    gnb[keys].classList.remove("on", "active");
  };
});
