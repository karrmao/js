// /*1.0*/ /*select counter(середовище)*/
// const counterElem = document.querySelector('.counter');
// /*1.5*/ /*selec velue*/
// const counterValueElem = document.querySelector('.counter__value');

// /*1.2*/ const onCounterChange = (e) => {
//   //if elem === .counter__button => button
//   /*1.2*/ const isButton = e.target.classList.contains('counter__button');

//   /*1.3*/ /*if is not button => exit func*/
//   if (!isButton) {
//     return;
//   }

//   /*1.4*/ /*select target action*/
//   const action = e.target.dataset.action;
//   /*1.6*/ /*convert string to number*/
//   const oldValue = Number(counterValueElem.textContent);
//   /*1.7*/ /*if === decrease => count - 1*/
//   counterValueElem.textContent =
//     action === 'decrease' ? oldValue - 1 : oldValue + 1;
// };

// /*1.1*/ counterElem.addEventListener('click', onCounterChange);
/***************************************************/
//second
/***************************************************/
// /*1.0*/ /*select counter(середовище)*/
// const counterElem = document.querySelector('.counter');
// /*1.5*/ /*selec velue*/
// const counterValueElem = document.querySelector('.counter__value');

// /*1.2*/ const onCounterChange = (e) => {
//   //if elem === .counter__button => button
//   /*1.2*/ const isButton = e.target.classList.contains('counter__button');

//   /*1.3*/ /*if is not button => exit func*/
//   if (!isButton) {
//     return;
//   }

//   /*1.4*/ /*select target action*/
//   const action = e.target.dataset.action;
//   /*1.6*/ /*convert string to number*/
//   const oldValue = Number(counterValueElem.textContent);
//   /*1.7*/ /*if === decrease => count - 1*/
//   const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;
//   /*1.7.1*/
//   /*********************************************/
//   localStorage.setItem('counterValue', newValue);
//   /*********************************************/
//   /*1.8*/ /**/
//   counterValueElem.textContent = newValue;
// };

// /*1.1*/ counterElem.addEventListener('click', onCounterChange);
// /***********************************/
// /*2.0*/ /*add traking in all tabs*/
// /***********************************/
// /*2.2*/ const onStorageChange = (e) => {
//   console.log(e);
//   /*2.2*/ /*value will be added in all tabs*/
//   counterValueElem.textContent = e.newValue;
// };
// /*2.1*/ window.addEventListener('storage', onStorageChange);
// /***********************************/
// /*3.0*/ /**/
// /***********************************/
// /*3.2*/ const onDocumentLoaded = () => {
//   counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
// };
// /*3.1*/ document.addEventListener('DOMContentLoaded', onDocumentLoaded);
/***************************************************/
//second
/***************************************************/
const counterElem = document.querySelector('.counter'); /*1.0*/
const counterValueElem = document.querySelector('.counter__value'); /*1.5*/

const onCounterChange = (e) => /*1.2*/ {
  const isButton = e.target.classList.contains('counter__button'); /*1.2*/

  if (!isButton /*1.3*/) {
    return;
  }

  const action = e.target.dataset.action; /*1.4*/
  const oldValue = Number(counterValueElem.textContent); /*1.6*/
  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1; /*1.7*/

  /*********************************************/
  localStorage.setItem('counterValue', newValue); /*1.7.1*/
  /*********************************************/

  counterValueElem.textContent = newValue; /*1.8*/
};

counterElem.addEventListener('click', onCounterChange); /*1.1*/
/***********************************/
/*2.0*/ /*add traking in all tabs*/
/***********************************/
const onStorageChange = (e) => /*2.2*/ {
  console.log(e);
  counterValueElem.textContent = e.newValue; /*2.2*/
};
window.addEventListener('storage', onStorageChange); /*2.1*/
/***********************************/
/*3.0*/
/***********************************/
const onDocumentLoaded = () => /*3.2*/ {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};
document.addEventListener('DOMContentLoaded', onDocumentLoaded); /*3.1*/
