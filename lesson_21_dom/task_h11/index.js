// const squeredNubers = () => {
//   const selectNumber = [...document.querySelectorAll('.number')];

//   selectNumber.map((el) => {
//     // console.dir(el);
//     // console.dir(el.dataset.number);
//     const squered = el.dataset.number * el.dataset.number;
//     console.log(squered);
//     el.dataset.squaredNumber = squered;
//   });
// };

// squeredNubers();

//option-2
//const squeredNubers = () => {
//  const selectNumber = document.querySelectorAll('.number');
//
//  Array.from(selectNumber).map((el) => {
//    const squered = el.dataset.number * el.dataset.number;
//    el.dataset.squaredNumber = squered;
//  });
//};

// squeredNubers();

//option-3
/*export*/ const squeredNubers = () => {
   const selectNumber = document.querySelectorAll('.number');
   console.log(...selectNumber);

   [...selectNumber].map((el) => {
     const squered = el.dataset.number * el.dataset.number;
     console.log(squered);
     el.dataset.squaredNumber = squered;
   });
 };

squeredNubers();
//=>
/* <li data-number="5" class="number" data-squared-number="25">😎</li>
<li data-number="7" class="number" data-squared-number="49">😉</li>
<li data-number="-3" class="number" data-squared-number="9">✌</li> */
