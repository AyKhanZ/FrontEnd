const openButton = document.getElementById('openModal');
const modal = document.getElementById('myModal');
const closeButton = document.getElementById('closeModal');

// Открыть модальное окно при клике на кнопку "Открыть"
openButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Закрыть модальное окно при клике на кнопку "Закрыть" или за его пределами
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});