import { fetchUserData, fetchReositories /*3*/ } from './gateways.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanRepoList /*7.1*/ } from './repos.js';
/*6.1_add renderRepos in repos.js*/
import { showSpinner, hideSpinner } from './spinner.js'; /*6.2*/

//const deafultAvatar = 'https://avatars3.githubusercontent.com/u10001';
//userAvatarElem.src = deafultAvatar;

/******************************************/
/*1_pзамінюємо закоментовану силку кодом нижче*/
const deafultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUserData(deafultUser); //рендеримо нашу фотку
/******************************************/

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');
//const listElem = document.querySelector('.repo-list'); /*7*/

const onSearchUsers = () => {
  showSpinner(); /*6.2.1*/
  //listElem.innerHTML = ''; /*7.1*/
  cleanRepoList();

  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url; /*2*/
    })
    .then((url) => fetchReositories(url) /*4*/)
    .then(
      (reposList) => {
        renderRepos(reposList);
        // hideSpinner(); /*6.2.2*/
      }
      /*5_add after add fetchReositories in gateways.js*/
    )
    .catch((err /*6*/) => {
      // hideSpinner(); /*6.2.3*/
      alert(err.message);
    })
    .finally(() => {
      hideSpinner(/*8*/);
    });
};

showUserBtnElem.addEventListener('click', onSearchUsers);
