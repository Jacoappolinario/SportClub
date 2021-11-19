import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListSportsUseCase } from './ListSportUseCase';

class ListSportsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const lisSportsUseCase = container.resolve(ListSportsUseCase);

    const all = await lisSportsUseCase.execute();

    return response.json(all);
  }
}

export { ListSportsController };
