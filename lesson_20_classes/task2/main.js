/*export*/ class Vehicle {
  constructor(name, hasWheels) {
    this.hasWheels = hasWheels;
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

/*export*/ class Ship extends Vehicle {
  constructor(name, speed) {
    super(name, false);
    this.speed = speed;
  }
  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }
  stop() {
    console.log(`${this.name} lifting anchor down`);
    super.stop();
  }
}

// test data
const shipChayka = new Ship('Chayka');
console.log(shipChayka);
//=> Ship {hasWheels: false, name: 'Chayka', speed: undefined}
shipChayka.move();
//=> Chayka lifting anchor up
//=> Chayka is moving
shipChayka.stop();
//=> Chayka lifting anchor down
//=> Chayka stopped

const shipGetmanSagaydachniy = new Ship('Getman Sagaydachniy', 15);
console.log(shipGetmanSagaydachniy);
//=> Ship {hasWheels: false, name: 'Getman Sagaydachniy', speed: 15}