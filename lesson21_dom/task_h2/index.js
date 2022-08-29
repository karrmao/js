const getItemList = () => {
  const elementList = document.querySelectorAll('.technology');
  console.dir(elementList);
  return elementList;
};

getItemList();

const getItemsArray = () => {
  const nodeElementList = document.querySelectorAll('.tool');
  const elementsArray = Array.from(nodeElementList);
  console.dir(elementsArray);
  return elementsArray;
};

getItemsArray();
