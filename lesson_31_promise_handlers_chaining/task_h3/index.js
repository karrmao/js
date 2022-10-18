// export const delay = (time) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(console.log('Done'));
//     }, time);
//   });

// delay(3000);

//export const delay = (time, value) =>
//  new Promise((resolve) => {
//    setTimeout(() => {
//      resolve(value);
//    }, time);
//  });
//
//delay(3000, 'done').then((value) => console.log(value));

export const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
delay(1000).then(() => console.log('Done'));
