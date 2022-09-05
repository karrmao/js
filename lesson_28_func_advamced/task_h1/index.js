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

      if (text === 'date') {
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
    },

    sub(text, number) {
      if (text === 'years') {
        currentDate.setFullYear(currentDate.getFullYear() - number);
        return this;
      }

      if (text === 'month') {
        currentDate.setMonth(currentDate.getMonth() - number);
        return this;
      }

      if (text === 'date') {
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
  .add('date', 1)
  .add('hours', 4)
  .add('minutes', 6)
  .add('seconds', 17)

  .sub('years', 14)
  .sub('month', 4)
  .sub('date', 19)
  .sub('hours', 22)
  .sub('minutes', 31)
  .sub('seconds', 55)

  .result();
console.log(new Date(result));
