import { inject, injectable } from 'tsyringe';

import { IPartnersRepository } from '@modules/club/repositories/IPartnersRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class DeletePartnerUseCase {
  constructor(
    @inject('PartnersRepository')
    private partnersRepository: IPartnersRepository,
  ) {}

  async execute(partner_id: string): Promise<void> {
    const partnerExists = await this.partnersRepository.findById(partner_id);

    if (!partnerExists) {
      throw new AppError('Partner not found', 404);
    }

    await this.partnersRepository.delete(partner_id);
  }
}

export { DeletePartnerUseCase };
