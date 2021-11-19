import { getRepository, Repository } from 'typeorm';

import { ICreatePartnerDTO } from '@modules/club/dtos/ICreatePartnerDTO';
import { IUpdatePatnerDTO } from '@modules/club/dtos/IUpdatePartnerDTO';
import { IPartnersRepository } from '@modules/club/repositories/IPartnersRepository';

import { Partner } from '../entities/Partner';

class PartnersRepository implements IPartnersRepository {
  private repository: Repository<Partner>;

  constructor() {
    this.repository = getRepository(Partner);
  }

  async create({
    name,
    last_name,
    birth_date,
    email,
    phone,
    adress,
  }: ICreatePartnerDTO): Promise<Partner> {
    const partner = this.repository.create({
      name,
      last_name,
      birth_date,
      email,
      phone,
      adress,
    });

    await this.repository.save(partner);

    return partner;
  }

  async list(): Promise<Partner[]> {
    const partners = await this.repository.find();

    return partners;
  }

  async findByEmail(email: string): Promise<Partner> {
    const partner = await this.repository.findOne({ email });

    return partner;
  }

  async findById(id: string): Promise<Partner> {
    const partner = await this.repository.findOne(id);

    return partner;
  }

  async update(
    partner_id: string,
    { name, last_name, birth_date, email, phone, adress }: IUpdatePatnerDTO,
  ): Promise<Partner> {
    const partner = await this.findById(partner_id);

    Object.assign(partner, {
      name,
      last_name,
      birth_date,
      email,
      phone,
      adress,
    });

    await this.repository.save(partner);

    return partner;
  }

  async delete(partner_id: string): Promise<void> {
    await this.repository.delete(partner_id);
  }
}

export { PartnersRepository };
