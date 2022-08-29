export const createButton = (buttonText) => {
  const addButton = document.createElement('button');
  addButton.textContent = buttonText;

  const bodyElem = document.querySelector('body');
  bodyElem.append(createButton);
};

//createButton('Кнопочка');
