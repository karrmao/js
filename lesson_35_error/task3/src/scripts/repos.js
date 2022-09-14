const listElem = document.querySelector('.repo-list'); /*1.7*/

export const cleanRepoList = (/*1.9*/) => {
  listElem.innerHTML = '';
};

export const renderRepos /*1*/ = (reposList) => {
  const reposListElem = /*1.1*/ reposList.map(
    /*1.2*/ ({ name }) => {
      const listElem = document.createElement('li'); /*1.3*/
      listElem.classList.add('repo-list__item'); /*1.4*/
      listElem.textContent = name; /*1.5_add name*/

      return listElem; /*1.6*/
    }
  );
  //listElem.innerHTML = ''; /*1.8_clean data!!!!!!!*/
  cleanRepoList();
  listElem.append(...reposListElem); /*1.8*/
};
