export const getTitle = () => {
  const textContent = document.querySelector('.title').textContent;
  console.dir(textContent);
  return textContent;
};

getTitle();
//=> I am Front-End developer

export const getDscription = () => {
  const innerText = document.querySelector('.about').innerText;
  console.dir(innerText);
  return innerText;
};

getDscription();
//=> I am good at HTML / CSS and JavaScript

export const getPlans = () => {
  const innerHtml = document.querySelector('.plans').innerHTML;
  console.dir(innerHtml);
  return innerHtml;
};

getPlans();
//=> I will learn <b>Redux</b> and <b>React</b> soon

export const getGoal = () => {
  const outerHtml = document.querySelector('.goal').outerHTML;
  console.dir(outerHtml);
  return outerHtml;
};

getGoal();
/*export*/
