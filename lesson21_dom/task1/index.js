export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Buy meat', done: true },
  { text: 'Visit party', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit doctor', done: true },
];

const renderTasks = (tasksList) => {
  const listElem = document.querySelector('.list');

  const listItemsElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');

      checkboxElem.checked = done;
      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });

  listElem.append(...listItemsElems);
};

renderTasks(tasks);
