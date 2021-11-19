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
class CreatePartnerUseCase {
  constructor(
    @inject('PartnersRepository')
    private partnersRepository: IPartnersRepository,
  ) {}

  async execute({
    name,
    last_name,
    birth_date,
    email,
    phone,
    adress,
  }: IRequest): Promise<Partner> {
    const partnerAlreadyExists = await this.partnersRepository.findByEmail(
      email,
    );

    if (partnerAlreadyExists) {
      throw new AppError('Partner already exists.');
    }

    const partner = await this.partnersRepository.create({
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

export { CreatePartnerUseCase };
