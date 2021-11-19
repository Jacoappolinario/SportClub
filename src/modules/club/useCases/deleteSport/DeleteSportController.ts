import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteSportUseCase } from './DeleteSportUseCase';

class DeleteSportController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const updateSportUseCase = container.resolve(DeleteSportUseCase);

    await updateSportUseCase.execute(id);

    return response.status(201).send();
  }
}

export { DeleteSportController };
