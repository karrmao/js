const userAvatarElem = document.querySelector('.user__avatar'); /*0*/ /*2.7*/
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const deafultAvatar = 'https://avatars3.githubusercontent.com/u10001'; /*0*/

userAvatarElem.src = deafultAvatar; /*0*/

const fetchUserData = (userName /*2.2*/) => {
  return fetch(`https://api.github.com/users/${userName}` /*2.2*/).then(
    (response) => response.json() /*2.3*/
  );
  //.then((result) => console.log(result));
};

const renderUserData /*2.5*/ = (userData) => {
  //console.log(userData);
  const { avatar_url /*2.7*/, name, location } = userData; /*2.6*/

  userAvatarElem.src /*2.7*/ = avatar_url;
  userNameElem.textContent /*2.8*/ = name;
  userLocationElem.textContent /*2.9*/ = location ? `from ${location}` : '';
  //userLocationElem.textContent = location ? `from ${location}` : '';
};
//facebook
const showUserBtnElem = document.querySelector('.name-form__btn'); /*1*/
const userNameInputElem = document.querySelector('.name-form__input'); /*2*/

const onSearchUsers = (/*1.1*/) => {
  const userName = userNameInputElem.value; /*2*/
  fetchUserData(userName /*2.1*/).then((userData) =>
    renderUserData(userData /*2.4*/)
  );
};

showUserBtnElem.addEventListener('click', onSearchUsers); /*1*/
