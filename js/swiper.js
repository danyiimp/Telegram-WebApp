const swiper = new Swiper(".swiper", {
    loop: true,
    speed: 500
  });

document.addEventListener("touchmove", function (event) {
  event.preventDefault();
},
  {
      passive: false
  });
