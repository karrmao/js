import { getItem } from './storage.js';

const listElem = document.querySelector('.list');


const /*sort 1.1*/compareTasks = (a, b) => a.done - b.done;

//createCheckbox
const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');
  checkboxElem.setAttribute('data-id', id);

  return checkboxElem;
};

//createListItem
const createListItem/*map 1.2*/ = ({ text, done, id }) => {
  const listItemElement = document.createElement('li');
  listItemElement.classList.add('list__item');
	
  const checkboxElem = createCheckbox({ done, id });

  if (done) {
    listItemElement.classList.add('list__item_done');
  }
  listItemElement.append(checkboxElem, text);

  return listItemElement;
};

//renderTasks
export const renderTasks/*renderTasks 1.3*/ = () => {
  const tasksList = getItem('tasksList') || [];

  listElem.innerHTML = '';
	
  const tasksElems = tasksList.sort(compareTasks/*sort 1.1*/).map(createListItem/*map 1.2*/);

  listElem.append(...tasksElems);
};
