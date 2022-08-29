export const getSection = (num) => {
  const findNumber = document.querySelector(`span[data-number="${num}"]`);
  return findNumber.parentElement.dataset.section;
};

//console.log(getSection(4));
