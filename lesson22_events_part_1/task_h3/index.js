const checkboxElem = document.querySelector('.task-status');
const checkedInputElem = () => console.log(checkboxElem.checked);
checkboxElem.addEventListener('change', checkedInputElem);

console.log(
  'checkboxElem.value === checkboxElem.value :',
  checkboxElem.value === checkboxElem.value
);
//=> true
