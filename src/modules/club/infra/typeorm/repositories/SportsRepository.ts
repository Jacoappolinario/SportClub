import { getRepository, Repository } from 'typeorm';

import {
  ICreateSportDTO,
  ISportsRepository,
} from '@modules/club/repositories/ISportsRepository';

import { Sport } from '../entities/Sport';

class SportsRepository implements ISportsRepository {
  private repository: Repository<Sport>;

  constructor() {
    this.repository = getRepository(Sport);
  }

  async create({ description, name }: ICreateSportDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Sport[]> {
    const sports = await this.repository.find();
    return sports;
  }

  async findByName(name: string): Promise<Sport> {
    const sport = await this.repository.findOne({ name });
    return sport;
  }

  async findById(id: string): Promise<Sport> {
    const sport = await this.repository.findOne(id);

    return sport;
  }

  async update(
    sport_id: string,
    { name, description }: ICreateSportDTO,
  ): Promise<Sport> {
    const sport = await this.findById(sport_id);

    Object.assign(sport, {
      name,
      description,
    });

    await this.repository.save(sport);

    return sport;
  }

  async delete(sport_id: string): Promise<void> {
    await this.repository.delete(sport_id);
  }
}

export { SportsRepository };
