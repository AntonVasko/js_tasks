// Функция для выбора типа вычислений
function selectCalculation(type) {
    const imageContainer = document.getElementById('image-container');
    const distanceForm = document.getElementById('distance-form');
    const circleForm = document.getElementById('circle-form');
    const resultDiv = document.getElementById('result');

    // Скрываем все элементы
    imageContainer.classList.add('hidden');
    distanceForm.classList.add('hidden');
    circleForm.classList.add('hidden');
    resultDiv.classList.add('hidden');

    if (type === 'distance') {
        imageContainer.querySelector('img').src = '';
        imageContainer.classList.remove('hidden');
        distanceForm.classList.remove('hidden');
    } else if (type === 'circle') {
        imageContainer.querySelector('img').src = '';
        imageContainer.classList.remove('hidden');
        circleForm.classList.remove('hidden');
    }
}