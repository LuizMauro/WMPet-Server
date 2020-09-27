import { container } from 'tsyringe';

import IusersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';
import AnimalsRepository from '@modules/animals/infra/typeorm/repositories/AnimalsRepository';

import IColorsRepository from '@modules/colors/repositories/IColorsRepository';
import ColorsRepository from '@modules/colors/infra/typeorm/repositories/ColorsRepository';
import IContactsRepository from '@modules/contacts/repositories/IContactsRepository';
import ContactsRepository from '@modules/contacts/infra/typeorm/repositories/ContactsRepository';

import IRacesRepository from '@modules/races/repositories/IRacesRepository';
import RacesRepository from '@modules/races/infra/typeorm/repositories/RacesRepository';

import IFursRepository from '@modules/furs/repositories/IFursRepository';
import FursRepository from '@modules/furs/infra/typeorm/repositories/FursRepository';

import IAddressesRepository from '@modules/addresses/repositories/IAddressesRepository';
import AddressesRepository from '@modules/addresses/infra/typeorm/repositories/AddressesRepository';
import Address from '@modules/addresses/infra/typeorm/entities/Addresses';

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

container.registerSingleton<IRacesRepository>(
  'RacesRepository',
  RacesRepository,
);

container.registerSingleton<IContactsRepository>(
  'ContactRepository',
  ContactsRepository,
);

container.registerSingleton<IAddressesRepository>(
  'AddressesRepository',
  AddressesRepository,
);

container.registerSingleton<IFursRepository>('FurRepository', FursRepository);
