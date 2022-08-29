// const setTitle = (text) => {
//   const x = (document.querySelector('.title').textContent = text);
//   console.dir(x);
// };

// setTitle('Hi, whats up?');

export const setTitle = (text) => {
  console.dir((document.querySelector('.title').textContent = text));
};

setTitle('Hi, whats up?');
