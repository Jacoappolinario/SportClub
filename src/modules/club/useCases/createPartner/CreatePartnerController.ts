import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePartnerUseCase } from './CreatePartnerUseCase';

class CreatePartnerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, last_name, birth_date, email, phone, adress } = request.body;

    const createPartnerUseCase = container.resolve(CreatePartnerUseCase);

    const partner = await createPartnerUseCase.execute({
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

export { CreatePartnerController };
