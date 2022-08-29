export const getItemList = () => {
  const elementList = document.querySelectorAll('.technology');
  console.dir(elementList);
  return elementList;
};

getItemList();

export const getItemsArray = () => {
  const elementsArray = document.querySelectorAll('.tool');
  console.dir(elementsArray);
  return Array.from(elementsArray);
};

getItemsArray();
