const inputElem = document.querySelector('.task-status');
const checkedInputElem = () => console.log(inputElem.checked);
inputElem.addEventListener('checked', checkedInputElem);
