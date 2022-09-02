/***************************************************/
//вішаємо обробник на середовище
const counterElem = document.querySelector('.counter');
/************************/
//підключаємо span value
const counterValueElem = document.querySelector('.counter__value');

//button  чи нє?
const onCounterChange = (e) => {
  const isButton = e.target.classList.contains('counter__button');

  if (!isButton) {
    return;
  }
  /************************/
  //підключаємо span value
  //const counterValueElem = document.querySelector('.counter__value');

  const action = e.target.dataset.action;

  const oldValue = Number(counterValueElem.textContent);
  //передамо наше нове значення 'Value'
  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('counterValue', newValue);

  counterValueElem.textContent = newValue;
};

//добавляжм лістінер
counterElem.addEventListener('click', onCounterChange);
/***************************************************/
//save для Storage
const onStorageChange = (e) => {
  //console.log(e);
  counterValueElem.textContent = e.newValue;
};
window.addEventListener('storage', onStorageChange);
/***************************************************/
const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded);
