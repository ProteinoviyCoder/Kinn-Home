const menuMobile = document.querySelector(".header__nav-list-mobile");
const listMobile = document.querySelector(".list-mobile");
const btnList = document.querySelector(".header__btn-list");

menuMobile.addEventListener("click", function () {
  const menuMobile1 = document.querySelector(".nav-list-mobile1");
  const menuMobile2 = document.querySelector(".nav-list-mobile2");
  const menuMobile3 = document.querySelector(".nav-list-mobile3");
  menuMobile1.classList.toggle("transform1");
  menuMobile3.classList.toggle("transform2");
  menuMobile2.classList.toggle("transform3");
  listMobile.classList.toggle("none");
  menuMobile.classList.toggle("header__nav-list-mobile-fixed");
  btnList.classList.toggle("none");
});
