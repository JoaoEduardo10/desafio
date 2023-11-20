import { MultiplesSumCalculatorValidation } from '../app/utils/validationMutiples';

class MultiplesSumCalculator {
  private DIVISOR_3: number;
  private DIVISOR_5: number;

  constructor() {
    this.DIVISOR_3 = 3;
    this.DIVISOR_5 = 5;
  }

  private isMultipleOf(number: number, divisor: number) {
    return number % divisor === 0;
  }

  public sumOfMultiplesBelowNumber(number: number) {
    MultiplesSumCalculatorValidation.validation(number);

    let sum = 0;

    for (let index = 1; index < number; index++) {
      if (
        this.isMultipleOf(index, this.DIVISOR_3) ||
        this.isMultipleOf(index, this.DIVISOR_5)
      ) {
        sum += index;
      }
    }

    return sum;
  }
}

export { MultiplesSumCalculator };
