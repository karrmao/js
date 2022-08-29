// export const createButton = (buttonText) => {
//   const addButton = document.createElement('button');
//   addButton.textContent = buttonText;

//   const bodyElem = document.querySelector('body');
//   bodyElem.append(createButton);
// };

// export const createButton = (buttonText) => {
//   const addButton = document.createElement('button');
//   addButton.textContent = buttonText;

//   document.querySelector('body').append(addButton);
// };

// //createButton('Кнопочка');

export const createButton = (buttonText) => {
  //document.createElement('button');
  const button = document.createElement('button');
  console.log(button);
  button.textContent = buttonText;
  document.querySelector('body').append(button);
  //return button;
};
