//1

// const title = document.querySelector('[data-title]');
// const buttons = document.querySelectorAll('[data-btn]');


// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const value = button.dataset.btn;
//     title.textContent = value;
//   });
// });

//2 

// const doubleBtn = document.querySelector('[data-doubleBtn]');

// doubleBtn.addEventListener('dblclick', () => {
// 	alert('Nice');
// })

//3

// const p = document.querySelector('[data-p]');
// const btn = document.querySelector('[data-btnPasted]');

// btn.addEventListener('click', () => {
// 	 p.textContent += "New text";
// })

//4

// const link = document.querySelector('[data-link]');
// const p = document.querySelector('[data-p]');
// const btn = document.querySelector('[data-btn]');

// const value = link.href;

// btn.addEventListener('click', () => {
// 	p.textContent = value;
// 	btn.textContent = 'Ссылка получена!';
// })

//5

// const btn = document.querySelector('[data-btn]');
// let number = 1; 

// btn.addEventListener('click', () => {
// 	number++;
// 	btn.textContent = number;
// })	

//6

// const input = document.querySelector('[data-input]');
// const paragraph = document.querySelector('[data-p]');

// input.addEventListener('blur', () => {

//   const inputValue = input.value;

//   paragraph.textContent += inputValue;

//   if(inputValue == 'clear'){
//   	paragraph.textContent = '';
//   }
// });