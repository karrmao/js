import { fetchUserData, fetchReositories } from './gateways.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanRepoList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

const deafultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUserData(deafultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUsers = async () => {
  showSpinner();
  cleanRepoList();

  const userName = userNameInputElem.value;
  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchReositories(userData.repos_url);
    renderRepos(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hideSpinner();
  }

  // fetchUserData(userName)
  //   .then((userData) => {
  //     renderUserData(userData);
  //     return userData.repos_url;
  //   })
  //   .then((url) => fetchReositories(url))
  //   .then((reposList) => {
  //     renderRepos(reposList);
  //   })
  //   .catch((err) => {
  //     alert(err.message);
  //   })
  //   .finally(() => {
  //     hideSpinner();
  //   });
};

showUserBtnElem.addEventListener('click', onSearchUsers);
