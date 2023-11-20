import { MultiplesSumCalculator } from '../../services/multiplesSumCalculator';
import { Internal_Server_Error } from '../errors/api-error';
import { MutiplesDTO } from '../interfaceDTO/mutiples';
import { IApiRequest, IApiResponse, IController } from './protocols';

class MutiplesController implements IController {
  constructor(
    private readonly multiplesSumCalculator: MultiplesSumCalculator,
  ) {}

  async handles(
    req: IApiRequest<MutiplesDTO>,
  ): Promise<IApiResponse<MutiplesDTO['number']>> {
    if (!req.body) {
      throw new Internal_Server_Error('Não foi possivel pega a soma ');
    }

    const { number } = req.body;

    const totalmutiples =
      this.multiplesSumCalculator.sumOfMultiplesBelowNumber(number);

    return {
      body: totalmutiples,
      statusCode: 200,
    };
  }
}

export { MutiplesController };
