export const delay = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('Done');
    }, time);
  });

delay(3000);
