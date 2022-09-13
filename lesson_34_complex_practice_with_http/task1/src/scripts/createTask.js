import { renderTasks } from './rendered.js';
import { setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  //беремо з tasksGateway.js↓↓↓
  createTask(newTask)
    .then(() => getTasksList()) //беремо з tasksGateway.js
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });

  const newTasksList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });

  setItem('tasksList', newTasksList);

  renderTasks();
};
