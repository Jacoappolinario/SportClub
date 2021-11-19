import { inject, injectable } from 'tsyringe';

import { Sport } from '@modules/club/infra/typeorm/entities/Sport';
import { ISportsRepository } from '@modules/club/repositories/ISportsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class UpdateSportUseCase {
  constructor(
    @inject('SportsRepository')
    private sportsRepository: ISportsRepository,
  ) {}

  async execute(
    sport_id: string,
    { name, description }: IRequest,
  ): Promise<Sport> {
    const sportExists = await this.sportsRepository.findById(sport_id);

    if (!sportExists) {
      throw new AppError('Sport not found', 404);
    }

    const sport = await this.sportsRepository.update(sport_id, {
      name,
      description,
    });

    return sport;
  }
}

export { UpdateSportUseCase };
