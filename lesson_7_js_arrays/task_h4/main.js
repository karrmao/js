 function cloneArr(arr) {
   if (!Array.isArray(arr)) {
     return null;
   }

   return [...arr];
 }

 // examples
 console.log(cloneArr([1, 2, 3, 4]));