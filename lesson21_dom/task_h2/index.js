export const getItemsList = () => {
  const elementList = document.querySelectorAll('.technology');
  console.dir(elementList);
  return elementList;
};

getItemsList();

// /*export*/ const getItemsArray = () => {
//
// };

// getItemsArray();

export const getItemsArray = () => {
  //const nodeElementList = document.querySelectorAll('.tool');
  //   const elementsArray = Array.from(nodeElementList);
  //   console.dir(elementsArray);
  //   return elementsArray;

  //refactoring
  const nodeElementList = Array.from(document.querySelectorAll('.tool'));
  console.dir(nodeElementList);
  return nodeElementList;
};

getItemsArray();
/*export*/
