document.querySelector(".header__burger").addEventListener("click", function () {
   this.classList.toggle("header__burger-active");
   document.querySelectorAll(".header__nav").forEach(function (headerNav) {
      headerNav.classList.toggle("header__nav-active");
   })
})