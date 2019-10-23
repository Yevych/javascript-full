let menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu-item'),
  li = document.createElement('li'),
  title = document.querySelector('.title'),
  adv = document.querySelector('.adv'),
  answer = document.getElementById('prompt');

// Восстановить порядок в меню, добавить пятый пункт
menu.insertBefore(menuItem[2], menuItem[1]);

li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);

// Заменить картинку заднего фона на другую из папки img
document.body.style.background = 'url(./img/apple_true.jpg)';

// Поменять заголовок, добавить слово "подлинную" 
// ( Получится - "Мы продаем только подлинную технику Apple")
title.textContent = 'Мы продаем только подлинную технику Apple';

// Удалить рекламу со страницы
adv.remove();

// Спросить у пользователя отношение к технике apple 
// и записать ответ в блок на странице с id "prompt"
let a = prompt('Ваше отношение к технике apple?', '');
answer.textContent = a;