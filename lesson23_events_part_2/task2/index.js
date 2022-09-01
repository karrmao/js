/*******************************************/
/*Генератор↓↓↓↓↓↓↓ для: секторів(3) */
const generateNumbersRange = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
};
/*******************************************/
/*Згенеруємо сидіння 🪑🪑🪑🪑🪑*/
const getLineSeats = () => {
  return generateNumbersRange(1, 10)
    .map(
      (seatNumber) =>
        `<div class="sector__seat" data-seat-number="${seatNumber}"></div>`
    )
    .join('');
};
/********************************/
/*Згенеруємо лінії ↓↓↓↓↓↓↓*/
const getSectorLines = () => {
  const seatsString = getLineSeats();
  return generateNumbersRange(1, 10)
    .map(
      (lineNumber) =>
        `<div class="sector__line" data-line-number="${lineNumber}">${seatsString}</div>`
    )
    .join('');
};
/********************************/
/***Arena***/
const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  const lineString = getSectorLines();
  //Згенеруємо сектори ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  const sectorsString = generateNumbersRange(1, 3)
    .map(
      (sectorNumber) =>
        `<div class="sector" data-sector-number="${sectorNumber}">${lineString}</div>`
    )
    .join('');

  arenaElem.innerHTML = sectorsString; //( згенеровані 3 сектори)
  //можна замість innerHTML застос. append
};
/********************************/
/*Згенеруємо лінії ↓↓↓↓↓↓↓*/
const onSeatSelect = (event) => {
  //якщо елемент містить  клас 'sector__seat' то - це 🪑🪑🪑
  const isSeat = event.target.classList.contains('sector__seat');
  if (!isSeat) {
    //Не 🪑🪑🪑 то виходимо
    return;
  }
  //Отримуємо наші значення ↓↓↓↓↓↓↓
  const seatNumber = event.target.dataset.seatNumber; //Отримуємо № 🪑🪑🪑
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber; //Отримуємо № Стовпця
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber; //Отримуємо № Сектор
  //Наше 🖥
  const selectedSeatElem = document.querySelector('.board__selected-seat'); //Підключаємо 🖥
  selectedSeatElem.textContent = `Sec ${sectorNumber} - Lin ${lineNumber} - Sea ${seatNumber}`; //Виводимо на 🖥
};
//підключаємо клік по Arena
arenaElem.addEventListener('click', onSeatSelect);
/*************/
renderArena();
/*************/
