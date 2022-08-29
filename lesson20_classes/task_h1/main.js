/*export*/ class Order {
  constructor(price, city, type) {
    this.id = `${Math.random()}`;
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = null;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}

// test data
const orderLviv = new Order(1200, 'Lviv', 'Buy');
console.log(orderLviv.checkPrice());
console.log(orderLviv.confirmOrder());
console.log(orderLviv.isValidType());
console.log(orderLviv);
console.log('***');

const orderKyiv = new Order(999, 'Kyiv', 'Sell');
console.log(orderKyiv.checkPrice());
console.log(orderKyiv.confirmOrder());
console.log(orderKyiv.isValidType());
console.log(orderKyiv);
console.log('***');

const orderTernopil = new Order(1000, 'Ternopil', 'Change');
console.log(orderTernopil.checkPrice());
console.log(orderTernopil.confirmOrder());
console.log(orderTernopil.isValidType());
console.log(orderTernopil);