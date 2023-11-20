/* eslint-disable @typescript-eslint/no-explicit-any */
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

  it('should rectify an error by not adding a number', () => {
    const calculator = new MultiplesSumCalculator();

    try {
      const result = calculator.sumOfMultiplesBelowNumber(null as any);

      expect(result).not.toBeTruthy();
    } catch (error) {
      expect(error).toBeTruthy();

      expect((error as Error).message).toBe('Adicione um numero');
    }
  });

  it('should rectify an error for sending a string', () => {
    const calculator = new MultiplesSumCalculator();

    try {
      const result = calculator.sumOfMultiplesBelowNumber('1234' as any);

      expect(result).not.toBeTruthy();
    } catch (error) {
      expect(error).toBeTruthy();

      expect((error as Error).message).toBe(
        'O número deve ser positivo e inteiro.',
      );
    }
  });

  it('This should rectify an error by sending an integer', () => {
    const calculator = new MultiplesSumCalculator();

    try {
      const result = calculator.sumOfMultiplesBelowNumber(12.6);

      expect(result).not.toBeTruthy();
    } catch (error) {
      expect(error).toBeTruthy();

      expect((error as Error).message).toBe(
        'O número deve ser positivo e inteiro.',
      );
    }
  });
});
