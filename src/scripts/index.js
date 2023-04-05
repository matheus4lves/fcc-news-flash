const headerDesktop = document.querySelector("#header-desktop");
const headerMobile = document.querySelector("#header-mobile");

const toggleHeader = function () {
  if (window.innerWidth < 1024) {
    headerDesktop.classList.add("header--hidden");
    headerMobile.classList.remove("header--hidden");
  } else {
    headerDesktop.classList.remove("header--hidden");
    headerMobile.classList.add("header--hidden");
  }
};

// window.onload = toggleHeader();
// window.onresize = toggleHeader;
window.addEventListener("DOMContentLoaded", toggleHeader);
window.addEventListener("resize", toggleHeader);
