export const createButton = (buttonText) => {
  const createButton = document.createElement('button');
  createButton.textContent = buttonText;
  const bodyElem = document.querySelector('body');
  bodyElem.append(createButton);
};

//createButton('Кнопочка');
