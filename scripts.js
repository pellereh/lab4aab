// Список изображений и описаний
const photos = [
    { src: "images/pic1.jpg", text: "Картинка 1" },
    { src: "images/pic2.jpg", text: "Картинка 2" },
    { src: "images/pic3.jpg", text: "Картинка 3" },
    { src: "images/pic4.jpg", text: "Картинка 4" },
    { src: "images/pic8.jpg", text: "Картинка 5" },
    { src: "images/pic9.jpg", text: "Картинка 6" },
];

// Функция для создания карточки
const createPhotoCell = (photo, delay) => {
    // Создаём элементы
    const cell = document.createElement('div');
    cell.classList.add('photo-cell');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const loader = document.createElement('div');
    loader.classList.add('loading-animation');

    const image = document.createElement('img');
    image.classList.add('delayed-image');
    image.src = photo.src;
    image.alt = photo.text;

    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent = photo.text;

    // Собираем структуру
    imageContainer.appendChild(loader);
    imageContainer.appendChild(image);
    cell.appendChild(imageContainer);
    cell.appendChild(text);

    // Добавляем анимацию загрузки
    setTimeout(() => {
        loader.style.visibility = 'visible';

        // Когда изображение загружено
        image.addEventListener('load', () => {
            loader.style.visibility = 'hidden';
            image.classList.add('loaded');
        });

        // Загрузка изображения
        const src = image.src;
        image.src = ''; // Сбрасываем src
        image.src = src; // Перезаписываем src для загрузки
    }, delay);

    return cell;
};

// Контейнер для карточек
const photoGrid = document.querySelector('.photo-grid');

// Добавляем карточки в контейнер с задержкой
photos.forEach((photo, index) => {
    const delay = index * 1000; // Задержка в 1 секунду между загрузками
    const cell = createPhotoCell(photo, delay);
    photoGrid.appendChild(cell);
});
