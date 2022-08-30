const inputElem = document.querySelector('.text-input');

const logText = (event) => {
  console.log(event.target.value);
};

inputElem.addEventListener('change', logText);
