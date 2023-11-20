import { Router } from 'express';
import { MultiplesSumCalculator } from '../services/multiplesSumCalculator';
import { MutiplesController } from './controllers/mutiples';
import { MutiplesMiddleware } from './middleware/mutiplesmiddlware';

const router = Router();

router.post('/mutiples', MutiplesMiddleware.middleware, async (req, res) => {
  const multiplesSumCalculator = new MultiplesSumCalculator();
  const multiplesController = new MutiplesController(multiplesSumCalculator);

  const { body, statusCode } = await multiplesController.handles(req);

  res.status(statusCode).json({ total: body });
});

export { router };
