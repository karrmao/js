// const dayOfWeek = (date, days) => {
//   const day = new Date(date).getDate();
//   const dayInFuture = new Date(date).setDate(day + days);
//
//   return dayInFuture;
// };
// /*************************************************/
// /*[Jan0],[Feb1],[Mar2],[Apr3],[May4],[Jun5]
// /*[Jly6],[Aug7],[Sep8],[Oct9],[Nov10],[Dec11]
// /*************************************************/
// const result = dayOfWeek(new Date(2022, 8, 1), 5);//2022/[Sep8]/1 + 5
// console.log(new Date(result));
//=> Wed Dec 07 2022 00:00:00 GMT+0200

/*************************************************/
//T1
const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

/*export*/ const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dayInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dayInFuture).getDay()];
};

const result = dayOfWeek(new Date(2022, 9, 1), 5);
console.log(result); //=> Th
