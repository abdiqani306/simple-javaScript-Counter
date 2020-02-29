const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');

let counter = 0;

buttons.forEach(button => {
  button.addEventListener('click', e => {
      if(button.classList.contains('add')){
          result.innerHTML = `<h1>${counter++}`;
      }else{
        result.innerHTML = `<h1>${--counter}`;
      }
  })
});