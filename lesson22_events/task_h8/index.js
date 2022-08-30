const taskStatus = document.querySelector('.task-status');

const statusInput = (event) => {
  console.log(event.target.checked);
};

taskStatus.addEventListener('change', statusInput);
