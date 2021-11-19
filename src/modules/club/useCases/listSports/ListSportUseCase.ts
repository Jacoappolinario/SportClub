import { inject, injectable } from 'tsyringe';

import { Sport } from '@modules/club/infra/typeorm/entities/Sport';
import { ISportsRepository } from '@modules/club/repositories/ISportsRepository';

@injectable()
class ListSportsUseCase {
  constructor(
    @inject('SportsRepository')
    private sportsRepository: ISportsRepository,
  ) {}

  async execute(): Promise<Sport[]> {
    const sports = await this.sportsRepository.list();

    return sports;
  }
}

export { ListSportsUseCase };
