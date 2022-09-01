/***************Find El*****************/
const spanElemAddBtn = document.querySelector('.rect_span');
//підключення кнопки

//місце куди вставляю код
const eventListElem = document.querySelector('.events-list');

/***************Prind El*****************/
const logTarget = (text, color) => {
  eventListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};


const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

//click по btn
spanElemAddBtn.addEventListener('click', logGreySpan, true);








/***************Clear btn*****************/
const eventsList = document.querySelector('.events-list');

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
  eventsList.innerHTML = '';
});


