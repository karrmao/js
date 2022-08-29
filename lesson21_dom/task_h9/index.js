export const finishForm = () => {
  const findInput = document.querySelector('.login-form');

  const addInput = document.createElement('input');
  addInput.setAttribute('type', 'text');
  addInput.setAttribute('name', 'login');
  findInput.prepend(addInput);

  findInput.lastElementChild.setAttribute('type', 'pasword');
};

//finishForm();
