particlesJS.load("particles-js", "config/particlesjs-config.json", function() {
  console.log("callback - particles.js config loaded");
});
let title = new Typed("#main__title", {
  strings: ["Abdulgafur Bersugir"],
  typeSpeed: 90,
  showCursor: false
});

let discription = new Typed("#main__discription", {
  strings: ["Software", "Android", "React"],
  typeSpeed: 90,
  autoInsertCss: true,
  backSpeed: 90,
  backDelay: 1500,

  loop: true
});

$("#main__arrow-down--button").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#about").offset().top
    },
    1500
  );
});
