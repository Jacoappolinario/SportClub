import { container } from 'tsyringe';

import { UsersRepository } from '@modules/administrators/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/administrators/repositories/IUsersRepository';
import { PartnersRepository } from '@modules/club/infra/typeorm/repositories/PartnersRepository';
import { SportsRepository } from '@modules/club/infra/typeorm/repositories/SportsRepository';
import { IPartnersRepository } from '@modules/club/repositories/IPartnersRepository';
import { ISportsRepository } from '@modules/club/repositories/ISportsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPartnersRepository>(
  'PartnersRepository',
  PartnersRepository,
);

container.registerSingleton<ISportsRepository>(
  'SportsRepository',
  SportsRepository,
);
