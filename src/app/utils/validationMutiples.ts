import { Bad_Request } from '../errors/api-error';

class MultiplesSumCalculatorValidation {
  static validation(number: number) {
    if (!number) {
      throw new Bad_Request('Adicione um numero');
    }

    if (
      typeof number !== 'number' ||
      !Number.isInteger(number) ||
      number <= 0
    ) {
      throw new Bad_Request('O número deve ser positivo e inteiro.');
    }
  }
}

export { MultiplesSumCalculatorValidation };
