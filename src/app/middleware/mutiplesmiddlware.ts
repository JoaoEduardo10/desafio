/* eslint-disable @typescript-eslint/ban-types */
import { NextFunction, Request, Response } from 'express';
import { MutiplesDTO } from '../interfaceDTO/mutiples';
import { MultiplesSumCalculatorValidation } from '../utils/validationMutiples';

class MutiplesMiddleware {
  static middleware(
    req: Request<{}, {}, MutiplesDTO>,
    _res: Response,
    next: NextFunction,
  ) {
    const { number } = req.body;

    MultiplesSumCalculatorValidation.validation(number);

    next();
  }
}

export { MutiplesMiddleware };
