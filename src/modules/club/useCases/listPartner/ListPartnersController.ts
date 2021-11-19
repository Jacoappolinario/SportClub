import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListPartnersUseCase } from './ListPartnersUseCase';

class ListPartnersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listPartnersUseCase = container.resolve(ListPartnersUseCase);

    const all = await listPartnersUseCase.execute();

    return response.json(all);
  }
}

export { ListPartnersController };
