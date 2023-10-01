const swiper = new Swiper(".swiper", {
    loop: true,
    preventInteractionOnTransition: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// slider = document.getElementsByClassName("swiper")[0];

// function handleTouchStart(event) {
//   // Запоминаем начальное положение касания
//   this.startY = event.touches[0].clientY;
// };  

// // Обработчик события touchmove
// function handleTouchMove(event) {
//   // Вычисляем разницу между начальным и текущим положением касания
//   var deltaY = this.startY - event.touches[0].clientY;

//   // Если разница больше определенного значения (например, 10 пикселей), предотвращаем прокрутку страницы
//   if (Math.abs(deltaY) > 5) {
//     event.preventDefault();
//   }
// }

// // Добавляем обработчики событий touchstart и touchmove к слайдеру
// slider.addEventListener('touchstart', handleTouchStart, false);
// slider.addEventListener('touchmove', handleTouchMove, false);