function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
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


