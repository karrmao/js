const baseUrl = 'https://632074119f82827dcf2d19ba.mockapi.io/api/v1/users';

const loginFormElem = document.querySelector('.login-form');
const submitBtnElem = document.querySelector('.submit-button');

const createUser = (userData) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then((response) => {
    loginFormElem.reset();
    submitBtnElem.setAttribute('disabled', '');
    return response.json();
  });
};

/**************/
const getFormData = () => {
  const formData = Object.fromEntries(new FormData(loginFormElem));
  createUser(formData).then((response) => alert(JSON.stringify(response)));
};

const logSubmit = (e) => {
  e.preventDefault();
};

loginFormElem.addEventListener('submit', logSubmit);

/**************/
const checkValidForm = () => {
  const isValid = loginFormElem.reportValidity();

  if (!isValid) {
    return;
  }
  //submitBtn
  submitBtnElem.removeAttribute('disabled');
  submitBtnElem.addEventListener('click', getFormData); //getFormData
};

loginFormElem.addEventListener('input', checkValidForm); //checkValidForm
