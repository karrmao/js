const btnsElement = document.querySelectorAll('.pagination__page');
const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};

[...btnsElement].map((el) => el.addEventListener('click', handleClick));
//Array.from(btnsElement).map((el) => el.addEventListener('click', handleClick));