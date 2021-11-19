import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeletePartnerUseCase } from './DeletePartnerUseCase';

class DeletePartnerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const updatePartnerUseCase = container.resolve(DeletePartnerUseCase);

    await updatePartnerUseCase.execute(id);

    return response.status(201).send();
  }
}

export { DeletePartnerController };
