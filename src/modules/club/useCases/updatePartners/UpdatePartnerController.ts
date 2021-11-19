import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdatePartnerUseCase } from './UpdatePartnerUseCase';

class UpdatePartnerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, last_name, birth_date, email, phone, adress } = request.body;

    const updatePartnerUseCase = container.resolve(UpdatePartnerUseCase);

    const partner = await updatePartnerUseCase.execute(id, {
      name,
      last_name,
      birth_date,
      email,
      phone,
      adress,
    });

    return response.status(201).json(partner);
  }
}

export { UpdatePartnerController };
