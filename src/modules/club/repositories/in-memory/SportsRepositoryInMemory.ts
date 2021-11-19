import { Sport } from '@modules/club/infra/typeorm/entities/Sport';

import { ICreateSportDTO, ISportsRepository } from '../ISportsRepository';

class SportsRepositoryInMemory implements ISportsRepository {
  sports: Sport[] = [];

  async findByName(name: string): Promise<Sport> {
    const sport = this.sports.find(sport => sport.name === name);
    return sport;
  }
  async list(): Promise<Sport[]> {
    const all = this.sports;
    return all;
  }
  async create({ name, description }: ICreateSportDTO): Promise<void> {
    const sport = new Sport();

    Object.assign(sport, {
      name,
      description,
    });

    this.sports.push(sport);
  }
}

export { SportsRepositoryInMemory };
