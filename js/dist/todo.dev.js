"use strict";

var init = function init() {
  var toodooItems = document.querySelector('.toodoo_items');
  var form = document.querySelector('#createForm'); // Демо данные

  var demo = function demo() {
    var i = 0;
    var demodata = [{
      checked: false,
      value: "\u0414\u0435\u043C\u043E-\u0441\u0442\u0440\u043E\u043A\u0430 ".concat(i++)
    }, {
      checked: false,
      value: "\u0414\u0435\u043C\u043E-\u0441\u0442\u0440\u043E\u043A\u0430 ".concat(i++)
    }, {
      checked: true,
      value: "\u0414\u0435\u043C\u043E-\u0441\u0442\u0440\u043E\u043A\u0430 ".concat(i++)
    }, {
      checked: false,
      value: "\u0414\u0435\u043C\u043E-\u0441\u0442\u0440\u043E\u043A\u0430 ".concat(i++)
    }, {
      checked: false,
      value: "\u0414\u0435\u043C\u043E-\u0441\u0442\u0440\u043E\u043A\u0430 ".concat(i++)
    }, {
      checked: false,
      value: "\u0414\u0435\u043C\u043E-\u0441\u0442\u0440\u043E\u043A\u0430 ".concat(i++)
    }];
    demodata.forEach(function (elem) {
      todoList.push(elem);
    });
    render();
    setLocalStorage(todoList);
  };

  var btn = document.querySelector('.demo');
  btn.addEventListener('click', demo); // Фиксируем состояние элемента

  var changes = function changes() {
    var changesItems = document.querySelectorAll('.changes input');
    changesItems.forEach(function (elem, i) {
      elem.addEventListener('input', function () {
        todoList[i].checked = !todoList[i].checked;
        setLocalStorage(todoList);
        render();
      });
    });
  }; // Удаление элемента


  var removeIrem = function removeIrem() {
    var close = document.querySelectorAll('.remove');
    close.forEach(function (elem, i) {
      elem.addEventListener('click', function () {
        todoList.splice(i, 1);
        setLocalStorage(todoList); // Меняем данные в хранилище

        render(todoList); // Ризуем все на стр.
      });
    });
  }; // Отрисовка элементов на странице


  var render = function render() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : todoList;
    var done = 'done';
    toodooItems.innerHTML = '';
    list.forEach(function (elem, i) {
      toodooItems.innerHTML += "\n                <li class=\"todo_item item_".concat(i, " ").concat(elem.checked ? 'done' : '', "\">\n                    <div class=\"changes\"><input ").concat(elem.checked ? 'checked' : '', " type=\"checkbox\"><span>").concat(elem.value, "</span></div>\n                    <div class=\"remove\"><img src=\"img/rubbish.svg\"></div>\n                </li>\n            ");
    });
    removeIrem(); // Получаем актуальный список кнопок удаления

    changes(); // Получаем актуальный список инпутов
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