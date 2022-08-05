const counter = document.getElementById("count-el");
const button = document.getElementById("increment-btn");
const de_button = document.getElementById("decrement-btn");
const save = document.getElementById("save-btn");
const clear = document.getElementById("clear-btn");
const totalCount = document.getElementById("total");

// function increment() {
//     'onclick' count 
// }

let count = 0;

// function increment() {
//   count = count + 1;
//   counter.innerText = count;
// }

button.addEventListener('click', () => {
  count += 1;
  counter.textContent = count;
});
  
de_button.addEventListener('click', () => {
  count -= 1;
  counter.textContent = count;
});

save.addEventListener('click', ()=>{
  
  totalCount.textContent += ` ${counter.textContent} - `;
  counter.textContent = 0;
  count = 0;
  // totalCount += " ";
  totalCount.style.fontSize = '30px';
});

clear.addEventListener('click',() =>{
  totalCount.textContent = 'Previous Count: ';
  counter.textContent = 0;
  count = 0;
})
// const welcomeEl = document.getElementById('welcome-el');
// const faSolid = document.getElementsByTagName('body i');

// let name = 'Daniel';
// let greetings = 'Good morning';

// welcomeEl.textContent =`${greetings}  ${name}`;


// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"



