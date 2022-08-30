/***************Find El*****************/
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const eventsList = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeHandledsBtn = document.querySelector('.remove-handlers-btn');
const attachHandledsBtn = document.querySelector('.attach-handlers-btn');

/***************Prind El*****************/
const logTarget = (text, color) => {
  const eventListElem = document.querySelector('.events-list');
  eventListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', logGreenDiv);
pElem.addEventListener('click', logGreenP);
spanElem.addEventListener('click', logGreenSpan);

divElem.addEventListener('click', logGreyDiv, true);
pElem.addEventListener('click', logGreyP, true);
spanElem.addEventListener('click', logGreySpan, true);

/***************Clear btn*****************/
clearBtn.addEventListener('click', () => {
  eventsList.innerHTML = '';
});

/***************Remove handleds btn*****************/
removeHandledsBtn.addEventListener('click', () => {
  divElem.addEventListener('click', logGreenDiv);
  pElem.addEventListener('click', logGreenP);
  spanElem.addEventListener('click', logGreenSpan);

  divElem.addEventListener('click', logGreyDiv, true);
  pElem.addEventListener('click', logGreyP, true);
  spanElem.addEventListener('click', logGreySpan, true);
});

/***************Attach handleds btn*****************/
attachHandledsBtn.addEventListener('click', () => {
  divElem.addEventListener('click', logGreenDiv);
  pElem.addEventListener('click', logGreenP);
  spanElem.addEventListener('click', logGreenSpan);

  divElem.addEventListener('click', logGreyDiv, true);
  pElem.addEventListener('click', logGreyP, true);
  spanElem.addEventListener('click', logGreySpan, true);
});
