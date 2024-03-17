function toggleMenu() {
    var nav = document.querySelector('nav');
    var logo = document.querySelector('.logo');
    nav.classList.toggle('show');
    logo.classList.toggle('logo_none');
}

console.log('ok')



$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 3, // Отображать сразу 3 карточки
        slidesToScroll: 1,
        prevArrow: $('.prev-button'),
        nextArrow: $('.next-button'),
        autoplay: true, // Автоматическая прокрутка
        autoplaySpeed: 2000 // Интервал автоматической прокрутки в миллисекундах
    });
});


document.addEventListener('DOMContentLoaded', function() {
  const mainListItems = document.querySelectorAll('.main-list > li');

  mainListItems.forEach(item => {
    item.addEventListener('click', function() {
      const subList = this.querySelector('.sub-list');
      if (subList) {
        subList.classList.toggle('active');
      }
    });
  });
});


function toggleFeedbackMenu() {
  var menu = document.getElementById('feedbackMenu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}