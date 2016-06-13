export class App {
  // Properties
  message = 'Welcome to Aurelia!';
  firstNum = 0;
  secondNum = 0;

  // Get method that returns the sum of the two integer properties
  get sum () {
    return parseInt(this.firstNum) + parseInt(this.secondNum);
  }

  submit () {
    alert(`Sum of ${this.firstNum} and ${this.secondNum} is ${this.sum}`)
  }

}
