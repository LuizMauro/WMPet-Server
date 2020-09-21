import { container } from 'tsyringe';

import IusersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IusersRepository>(
  'UsersRepository',
  UsersRepository,
);
