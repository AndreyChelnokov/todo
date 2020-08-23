"use strict";

var init = function init() {
  var toodooItems = document.querySelector('.toodoo_items');
  var form = document.querySelector('#createForm'); // Отрисовка элементов на странице

  var render = function render() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : todoList;
    toodooItems.innerHTML = '';
    list.forEach(function (elem, i) {
      toodooItems.innerHTML += "\n                <li class=\"item_".concat(i, "\">\n                    ").concat(elem.value, "\n                </li>\n            ");
    });
  }; // Получаем данные из хранилища


  var getLocalStorage = function getLocalStorage() {
    if (localStorage.getItem('list')) {
      var list = JSON.parse(localStorage.getItem('list'));
      render(list);
    }
  };

  getLocalStorage(); // Сохраняем в коласторидж

  var setLocalStorage = function setLocalStorage(todoList) {
    var string = JSON.stringify(todoList);
    localStorage.setItem('list', string);
  };

  if (localStorage.getItem('list')) {
    todoList = JSON.parse(todoList = localStorage.getItem('list'));
  } else {
    todoList = [];
  } // Добавляем элемент в список


  var pushTodo = function pushTodo(newTodo) {
    todoList.push(newTodo);
    render(todoList); // console.log(todoList)

    setLocalStorage(todoList);
  }; // Создаем элемент


  var createItem = function createItem(val) {
    newTodo = {
      checked: false,
      value: val
    };
    pushTodo(newTodo);
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = form.querySelector('input');
    var val = input.value;
    createItem(val);
    input.value = '';
  });
};

document.addEventListener('DOMContentLoaded', init);