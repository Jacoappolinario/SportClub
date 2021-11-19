import { ICreatePartnerDTO } from '../dtos/ICreatePartnerDTO';
import { Partner } from '../infra/typeorm/entities/Partner';

interface IPartnersRepository {
  create(data: ICreatePartnerDTO): Promise<Partner>;
  findById(id: string): Promise<Partner>;
  findByEmail(email: string): Promise<Partner>;
  list(): Promise<Partner[]>;
  update(partner_id: string, data: ICreatePartnerDTO): Promise<Partner>;
  delete(id: string): Promise<void>;
}

export { IPartnersRepository };
