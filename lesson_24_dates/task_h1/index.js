export function getDiff(startDate, endDate) {
  const difTime = Math.abs(startDate - endDate);
  //console.log(difTime);

  const days = Math.floor(difTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(difTime / (1000 * 60 * 60)) - days * 24;
  const minutes =
    Math.floor(difTime / (1000 * 60)) - days * 24 * 60 - hours * 60;
  const seconds =
    Math.floor(difTime / 1000) -
    minutes * 60 -
    hours * 60 * 60 -
    days * 24 * 60 * 60;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const firstDate = new Date(2022, 8, 5, 18, 00);
const lastDate = new Date(2022, 8, 3, 17, 00);
console.log(getDiff(firstDate, lastDate));
//=>  2d 1h 0m 0s
