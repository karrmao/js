import { renderTasks } from './rendered.js';
import { getItem, setItem } from './storage.js';

export const onToggleTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';
  const tasksList = getItem('tasksList') || [];
  const newTasksList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });
  setItem('tasksList', newTasksList);

  renderTasks();
};

////
export const onToggleTask = (e) => {
  const isCheckBox = e.target.classList.contains('list__item-checkbox');

  if (!isCheckBox) {
    return;
  }
  const taskslist = getItem('tasksList');
  const newTasksList = taskslist.map((task) => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return task;
  });
  setItem('tasksList', newTasksList);
  renderTasks();
};
