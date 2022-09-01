const tasks = [
  { text: 'Buy milk', done: false, id: randomId() },
  { text: 'Pick up Tom from airport', done: false, id: randomId() },
  { text: 'Visit party', done: false, id: randomId() },
  { text: 'Visit doctor', done: true, id: randomId() },
  { text: 'Buy meat', done: true, id: randomId() },
];

const listElem = document.querySelector('.list');

const renderTasks = (taskList) => {
  const listItemsElems = taskList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      //console.log(text, done, id);
      const listItemElem = document.createElement('li');
      listItemElem.dataset.id = id;
      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkboxElem = document.createElement('input');
      checkboxElem.dataset.id = id;
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');
      listItemElem.append(checkboxElem, text);
      return listItemElem;
    });
  listElem.append(...listItemsElems);
};
renderTasks(tasks);
/**************************************************/
//add button
const createTaskBtn = document.querySelector('.create-task-btn');
//add input
const taskInput = document.querySelector('.task-input');

//function add task
const addTask = () => {
  const inputFieldValue = taskInput.value;
  //console.dir(inputFieldValue);
  if (inputFieldValue === '') {
    return;
  }

  tasks.push({
    text: inputFieldValue,
    done: false,
    id: randomId(),
  });

  taskInput.innerHTML = '';
  listElem.innerHTML = '';

  renderTasks(tasks);
};

//add listener
createTaskBtn.addEventListener('click', addTask);
/**************************************************/
//work with checkbox

const checkboxDoneOrNot = (event) => {
  //get checkbox id with target.dataset
  const checkboxId = event.target.dataset.id;
  const filterId = tasks.find((el) => el.id === checkboxId);

  if (event.target.checked) {
    filterId.done = true;
  } else {
    filterId.done = false;
  }

  taskInput.innerHTML = '';
  listElem.innerHTML = '';

  renderTasks(tasks);
};

listElem.addEventListener('click', checkboxDoneOrNot);
/**************************************************/
//Func generate random id
function randomId() {
  return (Math.random() * 100).toFixed();
}
