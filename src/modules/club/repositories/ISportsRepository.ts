import { Sport } from '../infra/typeorm/entities/Sport';

interface ICreateSportDTO {
  name: string;
  description: string;
}

interface ISportsRepository {
  create({ name, description }: ICreateSportDTO): Promise<void>;
  list(): Promise<Sport[]>;
  findByName(name: string): Promise<Sport>;
  findById(id: string): Promise<Sport>;
  update(sport_id: string, data: ICreateSportDTO): Promise<Sport>;
  delete(id: string): Promise<void>;
}

export { ISportsRepository, ICreateSportDTO };
