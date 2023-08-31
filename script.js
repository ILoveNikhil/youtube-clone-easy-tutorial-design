var menuIcon = document.querySelector(".menu_icon");
var sideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function () {
  sideBar.classList.toggle("small_sidebar");
  container.classList.toggle("large_container");
};
