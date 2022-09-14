const spinerElem = document.querySelector('.spinner'); /*1.1*/

export const showSpinner = (/*1.2 show spinner*/) => {
  spinerElem.classList.remove('spinner_hidden');
  /*1.3_spinner_hidden(html 25line)*/
};

export const hideSpinner = (/*1.2 hide spinner*/) => {
  spinerElem.classList.add('spinner_hidden');
};
