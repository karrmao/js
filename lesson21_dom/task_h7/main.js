// const createButton1 = (buttonText) => {
//   const addButton = document.createElement('button');
//   addButton.textContent = buttonText;

//   const bodyElem = document.querySelector('body');
//   bodyElem.append(addButton);
// };
// createButton1('Button1');

export const createButton = (buttonText) => {
  const addButton = document.createElement('button');
  addButton.textContent = `<button>${buttonText}</button>`;
  document.querySelector('body').append(addButton);
};

//createButton('Button2');
