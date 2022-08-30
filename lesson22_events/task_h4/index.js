const inputElem = document.querySelector('.search__input');
const btnElm = document.querySelector('.search__btn');

const logText = () => {
  console.log(inputElem.value);
};

btnElm.addEventListener('click', logText);
