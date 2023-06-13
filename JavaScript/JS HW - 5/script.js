// Класс для работы с пользователями
class User {
    constructor(username, password) {
    this.username = username;
    this.password = password;
    }
}

// Обработчик события отправки формы регистрации
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    // Создаем нового пользователя
    const newUser = new User(username, password);

    // Загружаем существующие пользователи из файла JSON (если он существует)
    let users = [];
    if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
    }

    // Добавляем нового пользователя в массив
    users.push(newUser);

    // Сохраняем обновленный массив пользователей в файл JSON
    localStorage.setItem("users", JSON.stringify(users));

    // Сбрасываем значения полей формы
    document.getElementById("regUsername").value = "";
    document.getElementById("regPassword").value = "";

    alert("Пользователь зарегистрирован!");
    console.log("fghjh");
});

// Обработчик события отправки формы логина
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Загружаем существующих пользователей из файла JSON (если он существует)
    let users = [];
    if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
    }

    // Проверяем, существует ли пользователь с указанными учетными данными
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
    console.log("Вход выполнен!");
    } else {
    console.log("Неверное имя пользователя или пароль!");
    }

    // Сбрасываем значения полей формы
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
});