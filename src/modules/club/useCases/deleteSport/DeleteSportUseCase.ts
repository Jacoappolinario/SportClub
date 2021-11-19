import { inject, injectable } from 'tsyringe';

import { ISportsRepository } from '@modules/club/repositories/ISportsRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteSportUseCase {
  constructor(
    @inject('SportsRepository')
    private sportsRepository: ISportsRepository,
  ) {}

  async execute(sport_id: string): Promise<void> {
    const sportExists = await this.sportsRepository.findById(sport_id);

    if (!sportExists) {
      throw new AppError('Sport not found', 404);
    }

    await this.sportsRepository.delete(sport_id);
  }
}

export { DeleteSportUseCase };
