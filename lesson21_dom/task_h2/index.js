export const getItemsList = () => {
  const elementList = document.querySelectorAll('.technology');
  console.dir(elementList);
  return elementList;
};

getItemsList();

export const getItemsArray = () => {
  const nodeElementList = document.querySelectorAll('.tool');
  const elementsArray = Array.from(nodeElementList);
  console.dir(elementsArray);
  return elementsArray;
};

getItemsArray();

// export const getItemsList = () => {
//   const elementsList = document.querySelectorAll('.technology');
//   console.dir(elementsList);
//   return elementsList;
// };

// getItemsList();

// export const getItemsArray = () => {
//   const elementsArray = document.querySelectorAll('.tool');
//   const NodeList = Array.from(elementsArray);
//   console.dir(NodeList);
//   return NodeList;
// };

// getItemsArray();
