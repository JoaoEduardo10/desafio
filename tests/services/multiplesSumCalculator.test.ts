import { describe, expect, it } from 'vitest';
import { MultiplesSumCalculator } from '../../src/services/multiplesSumCalculator';

describe('multiplesSumCalculator.ts', () => {
  it('sumOfMultiplesBelowN returns correct sum for n=10', () => {
    const calculator = new MultiplesSumCalculator();

    const result = calculator.sumOfMultiplesBelowNumber(10);

    expect(result).toBe(23);
  });

  it('sumOfMultiplesBelowN returns correct sum for n=11', () => {
    const calculator = new MultiplesSumCalculator();

    const result = calculator.sumOfMultiplesBelowNumber(11);

    expect(result).toBe(33);
  });
});
