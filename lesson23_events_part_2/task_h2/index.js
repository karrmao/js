const inputElem = document.querySelector('.text-input');
const changedInputElem = () => console.log(inputElem.value);
inputElem.addEventListener('change', changedInputElem);
