export const finishList = () => {
  const items = document.querySelector('.list');
  const specialItem = items.querySelector('.special');

  const firstItem = document.createElement('li');
  firstItem.textContent = 1;
  items.prepend(firstItem);

  const fourthItem = document.createElement('li');
  fourthItem.textContent = 4;
  specialItem.before(fourthItem);

  const sixthItem = document.createElement('li');
  sixthItem.textContent = 6;
  specialItem.after(sixthItem);

  const lastItem = document.createElement('li');
  lastItem.textContent = 8;
  items.append(lastItem);
};

//finishList();
