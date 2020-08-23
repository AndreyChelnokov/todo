const init = () => {
    const toodooItems = document.querySelector('.toodoo_items');
    const form = document.querySelector('#createForm');


    // Отрисовка элементов на странице
    const render = (list = todoList) => {
        toodooItems.innerHTML = '';
        list.forEach( (elem, i) => {
            toodooItems.innerHTML += `
                <li class="item_${i}">
                    ${elem.value}
                </li>
            `;
        });
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

        // console.log(todoList)
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
        createItem(val);
        input.value = '';
    });
    
};

document.addEventListener('DOMContentLoaded', init);