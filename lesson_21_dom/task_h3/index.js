export const getTitle = () => {
  const textContent = document.querySelector('.title').textContent;
  console.dir(textContent);
  return textContent;
};

//--test data
getTitle();
//=> I am Front-End developer

export const getDescription = () => {
  const innerText = document.querySelector('.about').innerText;
  console.dir(innerText);
  return innerText;
};

//--test data
getDescription();
//=> I am good at HTML / CSS and JavaScript

export const getPlans = () => {
  const innerHtml = document.querySelector('.plans').innerHTML;
  console.dir(innerHtml);
  return innerHtml;
};

//--test data
getPlans();
//=> I will learn <b>Redux</b> and <b>React</b> soon

export const getGoal = () => {
  const outerHtml = document.querySelector('.goal').outerHTML;
  console.dir(outerHtml);
  return outerHtml;
};

//--test data
getGoal();
//=> <p class="goal">
//     And will become <b>world class</b> software engineer in a year
//   </p>

