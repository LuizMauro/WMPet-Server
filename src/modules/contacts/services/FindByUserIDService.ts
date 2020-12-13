import { injectable, inject } from 'tsyringe';

import IContactsRepository from '@modules/contacts/repositories/IContactsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import AppError from '@shared/errors/AppErros';
import Contacts from '../infra/typeorm/entities/Contacts';

interface IRequest {
  useID: string;
}

@injectable()
class findByUserIDService {
  constructor(
    @inject('ContactRepository')
    private ContactsRepository: IContactsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ useID }: IRequest): Promise<Contacts[]> {
    const user = await this.usersRepository.findById(useID);

    if (!user) {
      throw new AppError('User not found.');
    }

    const contacts = await this.ContactsRepository.findByUser(user.useID);

    return contacts;
  }
}

export default findByUserIDService;
