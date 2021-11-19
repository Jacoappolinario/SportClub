import { SportsRepositoryInMemory } from '@modules/club/repositories/in-memory/SportsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateSportUseCase } from './CreateSportUseCase';

let createSportUseCase: CreateSportUseCase;
let sportsRepositoryInMemory: SportsRepositoryInMemory;

describe('Create Sport', () => {
  beforeEach(() => {
    sportsRepositoryInMemory = new SportsRepositoryInMemory();
    createSportUseCase = new CreateSportUseCase(sportsRepositoryInMemory);
  });

  it('should be able to create a new sport', async () => {
    const sport = {
      name: 'sport Test',
      description: 'sport description Test',
    };

    await createSportUseCase.execute({
      name: sport.name,
      description: sport.description,
    });

    const sportCreated = await sportsRepositoryInMemory.findByName(sport.name);

    expect(sportCreated).toHaveProperty('id');
  });

  it('should not be able to create a new sport with name exists', async () => {
    expect(async () => {
      const sport = {
        name: 'sport Test',
        description: 'sport description Test',
      };

      await createSportUseCase.execute({
        name: sport.name,
        description: sport.description,
      });

      await createSportUseCase.execute({
        name: sport.name,
        description: sport.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
