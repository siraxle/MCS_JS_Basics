//1.
const Page = document.querySelector('.page');
let colorBody = prompt("Какой будет фон у страницы?");
Page.style.backgroundColor = colorBody;

// 2.
const Page1 = document.querySelector('.page');
let colorText = prompt("Какой будет цвет текста на странице?");
Page1.style.color = colorText;

//3.
const Name = document.querySelector('.name');
let newName = prompt("Как зовут человека, который вас вдохновляет?");
Name.innerHTML = "<p>"+newName+"</p>";

//4.
const image = document.querySelector('img');
let newImage = prompt("Введите адрес картинки:");
image.setAttribute('src', newImage);

//5.
const text = document.querySelector('.shortBio');
let newText = prompt("Введите текст страницы");
text.innerHTML = newText;

//6.
const borderText = document.querySelector('.shortBio')
borderText.className += ' animated';