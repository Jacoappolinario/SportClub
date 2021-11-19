import { inject, injectable } from 'tsyringe';

import { ISportsRepository } from '@modules/club/repositories/ISportsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSportUseCase {
  constructor(
    @inject('SportsRepository')
    private sportsRepository: ISportsRepository,
  ) {}

  async execute({ description, name }: IRequest): Promise<void> {
    const sportAlreadyExists = await this.sportsRepository.findByName(name);

    if (sportAlreadyExists) {
      throw new AppError('Sport already exists!');
    }

    this.sportsRepository.create({ name, description });
  }
}

export { CreateSportUseCase };
