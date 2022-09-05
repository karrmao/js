export const shmoment = (data) => {
  const currentDate = new Date(data);

  const calcData = {
    add(text, number) {
      if (text === 'years') {
        currentDate.setFullYear(currentDate.getFullYear() + number);
        return this;
      }

      if (text === 'month') {
        currentDate.setMonth(currentDate.getMonth() + number);
        return this;
      }

      if (text === 'days') {
        currentDate.setDate(currentDate.getDate() + number);
        return this;
      }

      if (text === 'hours') {
        currentDate.setHours(currentDate.getHours() + number);
        return this;
      }

      if (text === 'minutes') {
        currentDate.setMinutes(currentDate.getMinutes() + number);
        return this;
      }

      if (text === 'seconds') {
        currentDate.setSeconds(currentDate.getSeconds() + number);
        return this;
      }

      if (text === 'milliseconds') {
        currentDate.setMilliseconds(currentDate.getMilliseconds() + number);
        return this;
      }
    },

    subtract(text, number) {
      if (text === 'years') {
        currentDate.setFullYear(currentDate.getFullYear() - number);
        return this;
      }

      if (text === 'month') {
        currentDate.setMonth(currentDate.getMonth() - number);
        return this;
      }

      if (text === 'days') {
        currentDate.setDate(currentDate.getDate() - number);
        return this;
      }

      if (text === 'hours') {
        currentDate.setHours(currentDate.getHours() - number);
        return this;
      }

      if (text === 'minutes') {
        currentDate.setMinutes(currentDate.getMinutes() - number);
        return this;
      }

      if (text === 'seconds') {
        currentDate.setSeconds(currentDate.getSeconds() - number);
        return this;
      }

      if (text === 'milliseconds') {
        currentDate.setMilliseconds(currentDate.getMilliseconds() - number);
        return this;
      }
    },

    result() {
      return currentDate;
    },
  };

  return calcData;
};

// test data
const testData = new Date(2022, 3, 3, 15, 30, 0);
console.log('testData###', testData);

const result = shmoment(testData)
  .add('years', 7)
  .add('month', 3)
  .add('days', 1)
  .add('hours', 4)
  .add('minutes', 6)
  .add('seconds', 17)
  .add('milliseconds', 55)

  .subtract('years', 14)
  .subtract('month', 4)
  .subtract('days', 19)
  .subtract('hours', 22)
  .subtract('minutes', 31)
  .subtract('seconds', 55)
  .subtract('milliseconds', 15)

  .result();
console.log(new Date(result));
