const swiper = new Swiper(".swiper", {
    loop: true
  });

slider = document.getElementsByClassName("swiper")[0];

function handleTouchStart(event) {
  this.startY = event.touches[0].clientY;
};  

function handleTouchMove(event) {
  var deltaY = this.startY - event.touches[0].clientY;

  if (Math.abs(deltaY) > 5) {
    event.preventDefault();
  }
}

slider.addEventListener('touchstart', handleTouchStart, false);
slider.addEventListener('touchmove', handleTouchMove, false);