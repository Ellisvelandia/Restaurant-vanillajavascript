/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== HOME SWIPER ===============*/
var homeSswiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*=============== DEALS TAB ===============*/
const tabs = document.querySelectorAll("[data-target]");
tabContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabConten) => {
      tabConten.classList.remove("active-tab");
    });
    target.classList.add("active-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    tab.classList.add("active-tab");
  });
});

/*=============== SHOW SCROLL UP ===============*/
