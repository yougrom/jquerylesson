'use strict';

// Добавить текст на jQuery, Методы text(), hide(), show(), урок 7 

// Метод text() позволяет получить текстовое содержимое элемента или изменить его.
// Метод hide() скрывает элементы.
// Метод show() показывает элементы. 
// $( function(){
//    var tagP = $('.mainText p').text('Hello world!'); // Изменяем текстовое содержимое элемента
//    $('.mainText p').hide(3000);  // Скрываем элементы
//    $('.mainText p').show(3000, function(){}); // Показываем элементы
//    });


// Что такое Цепные функции в jQuery, урок 8

// Цепные функции - это когда один метод jQuery вызывается сразу после другого, и так далее.
// Пример:  
// $(function(){
//    $('.mainText p').hide(3000).show(3000); // Скрываем элементы и сразу же показываем
//    });

// Example 1
// let tagP = $('.mainText p');
// tagP.hide(3000).show(3000).text('Hello world!');


// Что такое Автоматические циклы в jQuery, урок 9

// $('.icons > div').hide(3000).show(1000).css('color','red'); // Скрываем элементы и сразу же показываем


// Изменение высоты и ширины width() и height(), урок 10

// let w = $('.mainText').width(300); // Изменяем ширину элемента
// alert(w); // Получаем ширину элемента
// let h = $('.mainText').height(300); // Изменяем высоту элемента
// alert(h); // Получаем высоту элемента

// function widthAndHeight(element) {
//    let className = '.' + element;
//    let w = $(className).width(); // Изменяем ширину элемента
//    let h = $(className).height(); // Изменяем высоту элемента
//    $('.mainText p').text('Ширина:  '+ w +'; Высота: ' + h);
// }
// widthAndHeight('btn');


// Изменение кода внутри элемента jquery, метод html(), урок 11

// $('.mainText').html('<H1>Hello world!</H1>');


// Плавная анимация fadeOut() и fadeIn() на jQuery, урок 12

// $('.mainText').fadeOut(5000).fadeIn(5000); // Скрываем элементы и сразу же показываем

// function fadeOutAndIn(element, time) {
//    if (time > 5000 || time < 1000 || isNaN(time)) {
//       return false;
//    } else {
//       let className = '.' + element;
//       $(className).fadeOut(time).fadeIn(time);
//    }
// }
// fadeOutAndIn('mainText', 4000);


// Задать прозрачность элемента на jQuery, Метод fadeTo(), урок 13
// function newFunk() {
//    // code
// }
// $('.mainText').fadeTo(5000, 0.25, newFunk()).fadeTo(5000, 1); // Скрываем элементы и сразу же показываем 


// Свернуть и развернуть элемент jquery, slideUp() и slideDown(), урок 14
// $('.mainText').slideUp(5000).slideDown(5000); // Скрываем элементы и сразу же показываем


// Добавление и удаление атрибутов на jQuery, attr() и removeAttr(), урок 15
// let src = $('.logo img').attr('src', 'img/icon1.png'); // Получаем значение атрибута
// $('.logo img').attr('title', 'Example'); // Получаем значение атрибута
// $('.logo img').removeAttr('src'); // Удаляем атрибут


// function changeAttr(element, newAttr, newValue) {
//    let className = '.' + element;
//    $(className).attr(newAttr, newValue);
// }
// changeAttr('logo', 'title', 'Example FUUFF'); // Получаем значение атрибута и меняем его


// Добавление и удаление классов на jQuery, addClass() и removeClass(), урок 16

// $('nav menu').addClass('newselector'); // Добавляем класс
// $('nav menu').removeClass('newselector'); // Удаляем класс


// Работа с CSS стилями на jQuery, метод css() на jQuery, урок 17

// $('nav menu a').css('color', 'red'); // Добавляем стиль
// $('nav menu a').css('color', ''); // Удаляем стиль
// $('nav menu a').css({
//    'color': 'blue',
//    'font-size': '20px',
//    'font-weight': 'bold'
// }); // Добавляем несколько стилей


// Анимация CSS стилей на jQuery с помощью метода animate(), урок 18
// $('nav menu li a').animate({
//    'font-size': '24px',
//    padding: '10px',
//    'font-weight': '900'
// }, 5000); // Добавляем несколько стилей


// Добавить HTML код на jQuery, урок 19
// $('.mainText').before('<h1>Добавляем HTML код в начало элемента</h1>'); 
// $('.mainText').after('<h1>Добавляем HTML код в конец элемента</h1>');
// $('.mainText').prepend('<h1>Добавляем HTML код в начало элемента</h1>');
// $('.mainText').append('<h1>Добавляем HTML код в конец элемента</h1>');


// Ручные циклы на jQuery, Метод each() и $(this), урок 20
$('.icons img').each(function() {
   if($(this).attr('src') == 'img/icon3.png') {
      $(this).fadeOut(3000);
   }
});