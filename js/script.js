const progressSpan = document.querySelectorAll(".progressSpan");

progressSpan.forEach((bars) => {
  bars.style.width = bars.dataset.width;
});
const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
const nav = document.getElementById("nav");

openNav.addEventListener("click", function () {
  nav.classList.add("openNav");
});
closeNav.addEventListener("click", function () {
  nav.classList.add("closeNav");
  nav.classList.remove("openNav");
});
/*//smoth scroll//*/
$("a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    var hash = this.hash;
    $("html,body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        window.location.hash = hash;
      }
    );
  }
});
