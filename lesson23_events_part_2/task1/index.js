/******************Валідація поля пароля Email**************/
// const onEmailChange = (event) => {
//   const /*4*/ errorText = [/*1*/ isRequired, /*2*/ isEmail]
//       .map((validator) => validator(event.target.value))
//       .filter((errorText) => errorText)
//       .join(', '); /**join() склеїть через ',' та ''(пробіл) */
//   /*3*/ emailErrorElem.textContent = /*4*/ errorText;
// };

const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

/*3*/ const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');
//валідатори

/*1*/ const isRequired = (value) => (value ? undefined : 'Required'); //=> провірка на пусте поле
/*2*/ const isEmail = (value) =>
  value.includes('@') ? undefined : 'Should be an email';

const validatorsByFiled = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validate = (fieldName, value) => {
  const validators = validatorsByFiled[fieldName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(', ');
};
/******************Валідація поля пароля Email**************/

const onEmailChange = (event) => {
  const errorText = validate('email', event.target.value);
  emailErrorElem.textContent = errorText;
};
emailInputElem.addEventListener('input', onEmailChange);

/******************Валідація поля Password**************/

const onPasswordChange = (event) => {
  const errorText = validate('password', event.target.value);
  passwordErrorElem.textContent = errorText;
};
passwordInputElem.addEventListener('input', onPasswordChange);

/******************Alert**************/
const formElement = document.querySelector('.login-form');
const onFormSubmit = (event) => {
  event.preventDefault(); //відміняє дефолтні значення браузера
  const formData = [...new FormData(formElement)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );
  alert(JSON.stringify(formData));
};

formElement.addEventListener('submit', onFormSubmit);
