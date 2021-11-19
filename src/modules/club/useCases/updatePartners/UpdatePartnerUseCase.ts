import { inject, injectable } from 'tsyringe';

import { Partner } from '@modules/club/infra/typeorm/entities/Partner';
import { IPartnersRepository } from '@modules/club/repositories/IPartnersRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  name: string;
  last_name: string;
  birth_date: Date;
  email: string;
  phone: string;
  adress: string;
}

@injectable()
class UpdatePartnerUseCase {
  constructor(
    @inject('PartnersRepository')
    private partnersRepository: IPartnersRepository,
  ) {}

  async execute(
    partner_id: string,
    { name, last_name, birth_date, email, phone, adress }: IRequest,
  ): Promise<Partner> {
    const partnerExists = await this.partnersRepository.findById(partner_id);

    if (!partnerExists) {
      throw new AppError('Partner not found', 404);
    }

    const partner = await this.partnersRepository.update(partner_id, {
      name,
      last_name,
      birth_date,
      email,
      phone,
      adress,
    });

    return partner;
  }
}

export { UpdatePartnerUseCase };
