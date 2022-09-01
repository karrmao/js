 const wallet = {
   transactions: [1, 5, -99, 400, 22],
   getMax() {
     return Math.max(...this.transactions);
   },

   getMin() {
     return Math.min(...this.transactions);
   },
 };

 //--data test
 console.log('max:', wallet.getMax(), 'min:', wallet.getMin());
//=> max: 400 min: -99