const btnElem = document.querySelector('.single-use-btn');

const toClick = () => {
  console.log('clicked');
  btnElem.removeEventListener('click', toClick); //=> do only one click
};

btnElem.addEventListener('click', toClick);
