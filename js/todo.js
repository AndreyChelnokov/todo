const init = () => {
    const toodooItems = document.querySelector('.toodoo_items');
    const form = document.querySelector('#createForm');

    // Фиксируем состояние элемента
    const changes = () => {
        let changesItems = document.querySelectorAll('.changes input');
        changesItems.forEach( (elem, i) => {
            elem.addEventListener('input', () => {
                todoList[i].checked = !todoList[i].checked
                setLocalStorage(todoList);
                render();
            })
        })
    }

    // Удаление элемента
    const removeIrem = () => {
        let close = document.querySelectorAll('.remove');
        close.forEach( (elem, i) => {
            elem.addEventListener('click', () => {
                todoList.splice(i, 1);
                setLocalStorage(todoList); // Меняем данные в хранилище
                render(todoList); // Ризуем все на стр.
            })
        })
    }
    
    // Отрисовка элементов на странице
    const render = (list = todoList) => {
        const done = 'done';
        toodooItems.innerHTML = '';
        list.forEach( (elem, i) => {
            toodooItems.innerHTML += `
                <li class="todo_item item_${i} ${elem.checked ? 'done' : ''}">
                    <div class="changes"><input ${elem.checked ? 'checked' : ''} type="checkbox"><span>${elem.value}</span></div>
                    <div class="remove"><img src="img/rubbish.svg"></div>
                </li>
            `;
        });
        removeIrem(); // Получаем актуальный список кнопок удаления
        changes(); // Получаем актуальный список инпутов
    };

    // Получаем данные из хранилища
    const getLocalStorage = () => {
        if(localStorage.getItem('list')){
            let list = JSON.parse(localStorage.getItem('list'));
            render(list);
        }
    }
    getLocalStorage();

    // Сохраняем в коласторидж
    const setLocalStorage = (todoList) => {
        let string = JSON.stringify(todoList);
        localStorage.setItem('list', string);
    }

    if(localStorage.getItem('list')){
        todoList = JSON.parse(todoList = localStorage.getItem('list'))
    } else {
        todoList = [];
    }
    
    // Добавляем элемент в список
    const pushTodo = (newTodo) => {
        todoList.push(newTodo);
        render(todoList);
        setLocalStorage(todoList);
        
    };

    // Создаем элемент
    const createItem = (val) => {
        newTodo = {
            checked : false,
            value: val
        };
        pushTodo(newTodo);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input');
        let val = input.value;
        if(val.trim() != ''){
            createItem(val);
            input.value = '';
        } else {
            console.log('Строка пустая')
        }
        
    });
    
};

document.addEventListener('DOMContentLoaded', init);