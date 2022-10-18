/***************Select El*****************/
const elemDiv = document.querySelector('.rect_div');
const elemP = document.querySelector('.rect_p');
const elemSpan = document.querySelector('.rect_span');

const eventsListElem = document.querySelector('.events-list');

const clearBtn = document.querySelector('.clear-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
const attachHandlerssBtn = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};
/***************Prind El*****************/
const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGrayDiv = logTarget.bind(null, 'DIV', 'gray');
const logGrayP = logTarget.bind(null, 'P', 'gray');
const logGraySpan = logTarget.bind(null, 'SPAN', 'gray');

elemDiv.addEventListener('click', logGrayDiv, { capture: true });
elemDiv.addEventListener('click', logGreenDiv);

elemP.addEventListener('click', logGrayP, true);
elemP.addEventListener('click', logGreenP);

elemSpan.addEventListener('click', logGraySpan, true);
elemSpan.addEventListener('click', logGreenSpan);
/***************ClearBtn*****************/
clearBtn.addEventListener('click', () => {
  eventsListElem.innerHTML = '';
});

/***************removeHandlersBtn*****************/
removeHandlersBtn.addEventListener('click', () => {
  elemDiv.removeEventListener('click', logGreenDiv);
  elemP.removeEventListener('click', logGreenP);
  elemSpan.removeEventListener('click', logGreenSpan);

  elemDiv.removeEventListener('click', logGrayDiv, { capture: true });
  elemP.removeEventListener('click', logGrayP, true);
  elemSpan.removeEventListener('click', logGraySpan, true);
});

/***************attachHandlersBtn*****************/
attachHandlerssBtn.addEventListener('click', () => {
  elemDiv.addEventListener('click', logGreenDiv);
  elemP.addEventListener('click', logGreenP);
  elemSpan.removeEventListener('click', logGreenSpan);

  elemDiv.addEventListener('click', logGrayDiv, { capture: true });
  elemP.addEventListener('click', logGrayP, true);
  elemSpan.addEventListener('click', logGraySpan, true);
});
