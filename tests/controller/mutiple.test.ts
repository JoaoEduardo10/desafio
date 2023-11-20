import { describe, expect, it } from 'vitest';
import { IApiRequest } from '../../src/app/controllers/protocols';
import { MutiplesController } from '../../src/app/controllers/mutiples';
import { MutiplesDTO } from '../../src/app/interfaceDTO/mutiples';
import { MultiplesSumCalculator } from '../../src/services/multiplesSumCalculator';

const req: IApiRequest<MutiplesDTO> = {
  body: {
    number: 10,
  },
};

const reqErro = {};

describe('mutiple.ts', () => {
  it('should return the total of the sum with status code 200', async () => {
    const multiplesSumCalculator = new MultiplesSumCalculator();

    const mutiplesController = new MutiplesController(multiplesSumCalculator);

    const { body, statusCode } = await mutiplesController.handles(req);

    expect(body).toBe(23);
    expect(statusCode).toBe(200);
  });

  it('should return an error for not adding a body', async () => {
    const multiplesSumCalculator = new MultiplesSumCalculator();

    const mutiplesController = new MutiplesController(multiplesSumCalculator);

    try {
      const { body } = await mutiplesController.handles(reqErro);

      expect(body).not.toBeTruthy();
    } catch (error) {
      expect(error).toBeTruthy();
      expect((error as Error).message).toBe('Não foi possivel pega a soma ');
    }
  });
});
