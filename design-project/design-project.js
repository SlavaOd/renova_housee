document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    // Показать текущий слайд
    updateSlider();

    // При клике на кнопку "Назад" показываем предыдущий слайд
    prevButton.addEventListener('click', showPrevSlide);

    // При клике на кнопку "Вперед" показываем следующий слайд
    nextButton.addEventListener('click', showNextSlide);

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentIndex ? 'block' : 'none';
        });
    }
});






function openPopup(element) {
    const popup = document.getElementById('popup');
    const imgSrc = element.querySelector('img').src;
    const popupImg = popup.querySelector('.popup-img');
    popupImg.src = imgSrc;
    popup.classList.add('show');
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
}