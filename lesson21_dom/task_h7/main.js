// const createButton1 = (buttonText) => {
//   const addButton = document.createElement('button');
//   addButton.textContent = buttonText;

//   const bodyElem = document.querySelector('body');
//   bodyElem.append(addButton);
// };
// createButton1('Button1');

const createButton = (buttonText) => {
  const addButton = document.createElement('button');
  addButton.textContent = `${buttonText}`;
  document.querySelector('body').append(addButton);
};

//createButton1('Button2');
