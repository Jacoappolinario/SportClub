import { inject, injectable } from 'tsyringe';

import { Partner } from '@modules/club/infra/typeorm/entities/Partner';
import { IPartnersRepository } from '@modules/club/repositories/IPartnersRepository';

@injectable()
class ListPartnersUseCase {
  constructor(
    @inject('PartnersRepository')
    private partnersRepository: IPartnersRepository,
  ) {}

  async execute(): Promise<Partner[]> {
    const partners = await this.partnersRepository.list();

    return partners;
  }
}

export { ListPartnersUseCase };
