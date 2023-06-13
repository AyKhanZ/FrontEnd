// Получаем ссылки на элементы DOM
var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");
// DOM BOM
// Обработчик события клика по кнопке "Добавить"
addButton.addEventListener("click", function() {
    var taskText = taskInput.value; // Получаем текст задачи

    if (taskText) {
        var newTask = document.createElement("li"); // Создаем новый элемент списка
        newTask.innerText = taskText; // Задаем текст для новой задачи

        taskList.appendChild(newTask); // Добавляем новую задачу в список
        taskInput.value = ""; // Очищаем поле ввода
    }
});
document.addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){ 
        window.location.href = "https://www." + taskInput.value + ".com";
    }
})