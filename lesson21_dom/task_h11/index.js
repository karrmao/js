/*export*/ const squaredNumbers = () => {
  const listItems = [...document.querySelectorAll('.number')];

  listItems.map((num) => {
    const squered = num.dataset.number * num.dataset.number;
    num.dataset.squaredNumber = squered;
  });
};
squaredNumbers();
