const swiper = new Swiper(".swiper", {
    loop: true,
    cssMode: true
  });

document.addEventListener("touchmove", function (event) {
  event.preventDefault();
},
  {
      passive: false
  });
