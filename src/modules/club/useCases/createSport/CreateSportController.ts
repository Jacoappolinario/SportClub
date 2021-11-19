import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { CreateSportUseCase } from './CreateSportUseCase';

class CreateSportController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createSportUseCase = container.resolve(CreateSportUseCase);

    await createSportUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSportController };
