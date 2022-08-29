 const calc = (expression) => {
   const [a, operator, b] = expression.split(' ');
   let result;

   switch (operator) {
     case '+':
       result = Number(a) + +b;
       break;

     case '-':
       result = a - b;
       break;

     case '*':
       result = a * b;
       break;

     case '/':
       result = a / b;
       break;
   }

   return `${expression} = ${result}`;
 };

 //-data test
 console.log(calc('3 + 4')); //=>7
 console.log(calc('3 - 4')); //=>-1
 console.log(calc('3 * 4')); //=>12
 console.log(calc('3 / 4')); //=>0.75