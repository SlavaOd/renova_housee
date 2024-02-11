document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    // При клике на кнопку "Назад" показываем предыдущий слайд
    prevButton.addEventListener('click', showPrevSlide);

    // При клике на кнопку "Вперед" показываем следующий слайд
    nextButton.addEventListener('click', showNextSlide);

    function showPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 2;
        }
        updateSlider();
    }

    function showNextSlide() {
        if (currentIndex < slides.length - 2) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }

    function updateSlider() {
        slides.forEach((slide, index) => {
            if (index === currentIndex || index === currentIndex + 1) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }
});
