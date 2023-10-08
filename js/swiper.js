const swiper = new Swiper(".swiper", {
    loop: true,
    speed: 100
  });

document.addEventListener("touchmove", function (event) {
  event.preventDefault();
},
  {
      passive: false
  });
