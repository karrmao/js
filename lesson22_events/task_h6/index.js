const btnsElements = document.querySelectorAll('.btn');

const handleClick = (event) => {
  console.log(event.target.textContent);
};

[...btnsElements].map((el) => el.addEventListener('click', handleClick));
