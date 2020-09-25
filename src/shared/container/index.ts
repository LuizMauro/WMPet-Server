import { container } from 'tsyringe';

import IusersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';
import AnimalsRepository from '@modules/animals/infra/typeorm/repositories/AnimalsRepository';

import IColorsRepository from '@modules/colors/repositories/IColorsRepository';
import ColorsRepository from '@modules/colors/infra/typeorm/repositories/ColorsRepository';

container.registerSingleton<IusersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IAnimalsRepository>(
  'AnimalsRepository',
  AnimalsRepository,
);

container.registerSingleton<IColorsRepository>(
  'ColorsRepository',
  ColorsRepository,
);
