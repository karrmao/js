/********************************/
/********************************/
//генеруємо ряди
const generateNumbersRange = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
};

/********************************/
//генеруємо строки в середині сектора
const getLineSeats = () => {
  return generateNumbersRange(1, 10)
    .map(
      (seatNumber) => `
    <div 
    class="sector__seat" 
    data-seat-number="${seatNumber}"
    ></div>`
    )
    .join('');
};
/********************************/
//генеруємо строки в середині сектора
const getSectorLines = () => {
  const seatsString = getLineSeats();
  return generateNumbersRange(1, 10)
    .map(
      (lineNumber) =>
        `<div
         class="sector__line"
          data-line-number="${lineNumber}"
          >${seatsString}</div>
          `
    )
    .join('');
}; /*Наповнить сидіннями */

/********************************/
const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  //знаходио Арену
  const lineString = getSectorLines();
  //генеруємо сектори
  const sectorsString = generateNumbersRange(1, 3)
    .map(
      (sectorNumber) => `
      <div
       class="sector" 
       data-sector-number="${sectorNumber}"
       >${lineString}</div>`
    )
    .join('');
  //інтенгруємо сектори в арену
  arenaElem.innerHTML = sectorsString;
};
/********************************/
/********************************/
const onSeatSelected = (event) => {
  //перевірка чи сидіння
  const isSeat = event.target.classList.contains('sector__seat');
  //=> якщо подія.елемент.класуюмістить('.sector__seat')(це значить що це сидіння)

  if (!isSeat) {
    //=> не сидіння
    return;
  }
  //місце розташування сидіння
  const seatNumber = event.target.dataset.seatNumber;
  //в якій лінії .closest()- знайде найближчу лінію, .dataset.lineNumber(data-line-number)
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  //вивід загальної інформації на табло
  const selectedSeatElement = document.querySelector('.board__selected-seat');

  selectedSeatElement.textContent = `S ${sectorNumber} - L ${lineNumber} - L ${seatNumber}`;
};
arenaElem.addEventListener('click', onSeatSelected);
/********************************/
/********************************/

renderArena();
