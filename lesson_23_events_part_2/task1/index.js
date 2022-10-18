/******************Валідація поля пароля Email**************/
// const onEmailChange = (event) => {
//   const /*4*/ errorText = [/*1*/ isRequired, /*2*/ isEmail]
//       .map((validator) => validator(event.target.value))
//       .filter((errorText) => errorText)
//       .join(', '); /**join() склеїть через ',' та ''(пробіл) */
//   /*3*/ emailErrorElem.textContent = /*4*/ errorText;
// };

/******************Select email & password inputs**************/
const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
/******************Select email & password text prints**************/
const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');
/******************Валідатор для Email та Password **************/
const isRequired = (value) => (value ? undefined : 'Required');

const isEmail = (value) =>
  value.includes('@') ? undefined : 'Should be an email';
/******************Валідація**************/
const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validate = (fieldName, value) => {
  //(value) => karrmao@gmail.com, 123 || (fieldName) => email, password
  const validators = validatorsByField[fieldName];

  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(', ');
};
/******************Валідація поля Email**************/
const onEmailChange = (event) => {
  const eventValueEmail = event.target.value; //(eventValueEmail)=>karrmao@gmail.com

  const errorText = validate('email', eventValueEmail);
  emailErrorElem.textContent = errorText;
};
emailInputElem.addEventListener('input', onEmailChange);
/******************Валідація поля Email**************/
const onPasswordChange = (event) => {
  const eventValuePassword = event.target.value; //(eventValuePassword)=> 123

  const errorText = validate('password', eventValuePassword);
  passwordErrorElem.textContent = errorText;
};
passwordInputElem.addEventListener('input', onPasswordChange);
/******************Вивід значень Email та Password через alert**************/
const formElem = document.querySelector('.login-form');

const onFormSubmit = (event) => {
  //відм станд.  поведінку брауз.
  event.preventDefault();
  const newFormData = [...new FormData(formElem)];

  //(***newFormData***)=>  (2) [Array(2), Array(2)]
  //     0:(2) ['email', 'karrmao@gmail.com']
  //     1:(2) ['password', '123']

  const formData = newFormData.reduce(
    (acc, [field, value]) => ({
      ...acc, //=> {}
      [field]: value, //=> first [email: 'karrmao@gmail.com'], [password: '123']
    }),
    {} //=> {[email: 'karrmao@gmail.com'], [password: '123']}
  );

  alert(JSON.stringify(formData)); //=> {"email":"karrmao@gmail.com","password":"12"}
};
formElem.addEventListener('submit', onFormSubmit);