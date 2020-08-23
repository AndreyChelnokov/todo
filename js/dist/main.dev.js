// const init = function(){
//     const form = document.querySelector('#createForm');
//     // Создание элемента +++
//     let i = list.length + 1;
//     const createItem = function(val){
//         list.push(
//             {
//                 id: i++,
//                 value: val,
//                 checked: false,
//             }
//         );
//         render();
//     };
//     // Удаление элемента
//     const removeItem = function(e){
//         render().forEach( (btn, i) => {
//             btn.addEventListener('click', () => {
//                 console.log(i)
//                 list.splice(i, 1);
//                 render();
//             })
//         });
//     };
//     removeItem();
//     // Состояние элемента
//     const conditionItem = function(){
//         let done = document.querySelectorAll('input.done');
//         done.forEach( elem => {
//             if(elem.checked){
//                 console.log(elem)
//                 elem.parentNode.parentNode.classList.add('done');
//             }
//             elem.addEventListener('input', () => {
//                 if(elem.checked){
//                     elem.parentNode.parentNode.classList.add('done');
//                 } else {
//                     elem.parentNode.parentNode.classList.remove('done');
//                 }
//             })
//         })
//     }
//     conditionItem();
//     // Отправка формы и измненение списков эементов
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const val = form.querySelector('input').value;
//         if(val.trim() != ''){
//             createItem(val);
//         }
//         form.querySelector('input').value = '';
//         removeItem();
//         conditionItem();
//     });
// };
// document.addEventListener('DOMContentLoaded', init);
"use strict";