//Algo
//part I
//1. Select our counterElem whith .counter ->
//2. Create listener 'click' -> onCounterChange
//3. Find button(isButton) with event(e) and classList.contains 'counter__button'
//4. If not a button -> return
//5. If button take action 'decrease' or
//6. Select counterValueElem  with .counter__value
//7. Create oldValue ant use textContent to get value(convert str to number)
//8. Create newValue. If click '+' count +1 else -1
//9. Set ur new value to counterValueElem
//10. Set our newVlue in localStorage with 'key': counterValue

//localStorage.clear();

//part II
//11. Create window addEventListener with 'storage' and callback onStorageChange(treking newValue in all web-tabs);
//12. Set our newValue

//part III
//13. Create document addEventListener with 'DOMContentLoaded' and callback onDocumentLoaded();
//14. '...|| 3' - default value when tab loaded
/*********************************************************/
//localStorage.clear();
/**********************Part I*****************************/
const counterElem = document.querySelector('.counter'); /*1*/
const counterValueElem = document.querySelector('.counter__value'); /*6*/

const onCounterChange = (e) => /*2.1*/ {
  const isButton = e.target.classList.contains('counter__button'); /*3*/
  console.log(isButton); //if work -> true

  if (!isButton) {
    return;
    /*4*/
  }

  const action = e.target.dataset.action; /*5*/
  console.log(action); //if we click in '-' give us 'decrease' or 'increase' if '+'

  const oldValue = Number(counterValueElem.textContent); /*7*/
  console.log(oldValue); //=> 0

  const newValue = action === 'increase' ? oldValue + 1 : oldValue - 1; /*8*/
  console.log(newValue); //=> +1 or -1

  localStorage.setItem('counterValue', newValue); /*10*/

  counterValueElem.textContent = newValue; /*9*/
};
counterElem.addEventListener('click', onCounterChange); /*2*/
/**********************Part II*****************************/
const onStorageChange = (e) => {
  counterValueElem.textContent = e.newValue; /*12*/
};
window.addEventListener('storage', onStorageChange /*11*/);
/***********************************************************/
/** - **  5 ** + *******in another tab****** - **  5 ** + **/
/***********************************************************/
/**********************Part III*****************************/
const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 3;
  /*14*/
};
document.addEventListener('DOMContentLoaded', onDocumentLoaded); /*13*/
