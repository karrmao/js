export const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];

const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dayInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dayInFuture).getDay()];
};

const result = dayOfWeek(new Date(2019, 0, 1), 14);
console.log(result);
