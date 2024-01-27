document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.gallery_card');
    const popup = document.querySelector('.popup');
    const popupContent = document.querySelector('.popup-content');
    const popupImage = document.querySelector('.popup-image');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentCardIndex = 0;
    let images = [];

    cards.forEach((card, index) => {
        card.addEventListener('click', () => openPopup(index + 1));
    });

    function openPopup(cardNumber) {
        currentCardIndex = 0; // Устанавливаем начальный индекс на первое изображение
        images = getImagesForCard(cardNumber);

        updatePopupImage();

        popup.style.display = 'block';
    }

    function closePopup() {
        popup.style.display = 'none';
    }

    function getImagesForCard(cardNumber) {
        switch (cardNumber) {
            case 1:
                return [
                    "./img/Screenshot_1.jpg",
                    "./img/Screenshot_2.jpg",
                    "./img/Screenshot_3.jpg"
                ];
            case 2:
                return [
                    "./img/Screenshot_4.jpg",
                    "./img/Screenshot_5.jpg",
                    "./img/Screenshot_6.jpg"
                ];
            case 3:
                return [
                    "./img/Screenshot_7.jpg",
                    "./img/Screenshot_8.jpg",
                    "./img/Screenshot_9.jpg"
                ];
            case 4:
                return [
                    "./img/Screenshot_10.jpg",
                    "./img/Screenshot_11.jpg",
                    "./img/Screenshot_12.jpg"
                ];
            case 5:
                return [
                    "./img/Screenshot_13.jpg",
                    "./img/Screenshot_14.jpg",
                    "./img/Screenshot_15.jpg"
                ];
            case 6:
                return [
                    "./img/Screenshot_16.jpg",
                    "./img/Screenshot_17.jpg",
                    "./img/Screenshot_18.jpg",
                    "./img/Screenshot_19.jpg"
                ];
            case 7:
                return [
                    "./img/Screenshot_19.jpg",
                    "./img/Screenshot_20.jpg",
                    "./img/Screenshot_21.jpg"
                ];
            case 8:
                return [
                    "./img/Screenshot_22.jpg",
                    "./img/Screenshot_23.jpg",
                    "./img/Screenshot_24.jpg"
                ];  
            default:
                return [];
        }
    }

    function updatePopupImage() {
        if (images.length > 0) {
            popupImage.src = images[currentCardIndex];
        }
    }

    function showNextImage() {
        if (images.length > 0) {
            currentCardIndex = (currentCardIndex + 1) % images.length;
            updatePopupImage();
        }
    }

    function showPrevImage() {
        if (images.length > 0) {
            currentCardIndex = (currentCardIndex - 1 + images.length) % images.length;
            updatePopupImage();
        }
    }

    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);
    document.querySelector('.popup .close').addEventListener('click', closePopup);
});
