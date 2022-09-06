const asyncCalculator = (num) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial value: ${num}`);
      resolve(num);
    }, 300);
  })
    .then(
      (num) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const result = num * num;
            console.log(`Squared value: ${result}`);
            resolve(result);
          }, 300);
        })
    )
    .then(
      (num) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const result = num * 2;
            console.log(`Doubled value: ${result}`);
            resolve(result);
          }, 300);
        })
    );

asyncCalculator(5);
