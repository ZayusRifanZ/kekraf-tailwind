// function for icon humberger menu
const navMenu = document.querySelector(".nav-menu-main");
const humbergerIcon = document.querySelector(".humberger");
const navTop = document.querySelector(".navbar-fixed-top");

humbergerIcon.addEventListener("click", mobileMenu);

function mobileMenu() {
  humbergerIcon.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// function scroll navbar active class ".scrolled"
window.onscroll = function () {
  scrolledFunction();
};

function scrolledFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navTop.classList.add("scrolled");
  } else {
    if (navMenu.classList.contains("active") == false) {
      navTop.classList.remove("scrolled");
    }
  }
}
