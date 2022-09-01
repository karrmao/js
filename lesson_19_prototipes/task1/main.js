/*export*/ const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

/*export*/ const ship = {
  name: 'Argo',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    ship.stop();
  },
};

Object.setPrototypeOf(ship, vehicle);

//--test data
ship.move();
console.log('***');
//=> Argo is moving
ship.stop();
console.log('***');
//=> Argo stopped

ship.startMachine();
console.log('***');
//=> Argo lifting anchor up
//=> Argo is moving
ship.stopMachine();
//=> Argo lifting anchor down
//=> Argo stopped
