"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge(currentYear) {
        return currentYear - this.year;
    }
}
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge(2024));
