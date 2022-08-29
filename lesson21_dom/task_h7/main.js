// export const createButton = (buttonText) => {
//   const addButton = document.createElement('button');
//   addButton.textContent = buttonText;

//   const bodyElem = document.querySelector('body');
//   bodyElem.append(createButton);
// };

export const createButton = (buttonText) => {
  const addButton = document.createElement('button');
  addButton.textContent = buttonText;

  document.querySelector('body').append(addButton);
};

//createButton('Кнопочка');

// export const createButton = buttonText => {

//   const button = document.createElement('button');

//   button.textContent = buttonText;
//   document.querySelector('body').append(button);
//   //return button;
// };
/*export*/
//console.log(createButton('Просто кнопка'));
