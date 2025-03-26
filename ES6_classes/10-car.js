export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Car = Object.getPrototypeOf(this.constructor);
    return new Car();
  }
}
