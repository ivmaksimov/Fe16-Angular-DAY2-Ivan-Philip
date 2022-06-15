export const vehicles: Array<Vehicle> = [];

export class Vehicle {
  name: string;
  milage: number;
  seats: number;
  fuel: string;
  year: number;
  constructor(name: string, km: number, seats: number, fuel: string, year: number) {
    this.name = name;
    this.milage = km;
    this.seats = seats;
    this.fuel = fuel;
    this.year = year;
  }
  calculatePrice() {
    return this.milage + this.seats
  }
}

class Motorbike extends Vehicle {
  performanceFactor: number;
  constructor(name: string, km: number, seats: number, fuel: string, year: number, factor: number) {
    super(name, km, seats, fuel, year)
    this.performanceFactor = factor;
  }
  override calculatePrice() {
    return super.calculatePrice() * this.performanceFactor;
  }
}

class Truck extends Vehicle {
  performanceFactor: number;
  constructor(name: string, km: number, seats: number, fuel: string, year: number, factor: number) {
    super(name, km, seats, fuel, year)
    this.performanceFactor = factor;
  }
  override calculatePrice() {
    return super.calculatePrice() * this.performanceFactor;
  }
}

let audi = new Vehicle("Audi", 12000, 5, "gasoline", 2010)
let vespa = new Motorbike("Vespa", 5000, 1, "gasoline", 1950, 0.9)
let truck = new Truck("18 Wheeler", 5000, 3, "gasoline", 1950, 1.2)

vehicles.push(audi, vespa, truck)
