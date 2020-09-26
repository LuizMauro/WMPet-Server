import { injectable, inject } from 'tsyringe';

import IContactsRepository from '@modules/contacts/repositories/IContactsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import AppError from '@shared/errors/AppErros';
import User from '@modules/users/infra/typeorm/entities/User';
import Contacts from '../infra/typeorm/entities/Contacts';

interface IRequest {
  conDescription: string;
  conType: boolean;
  useID: string;
}

@injectable()
class CreateContactsService {
  constructor(
    @inject('ContactRepository')
    private ContactsRepository: IContactsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    conDescription,
    conType,
    useID,
  }: IRequest): Promise<Contacts> {
    const user = await this.usersRepository.findById(useID);

    if (!user) {
      throw new AppError('User does not exists');
    }

    const contacts = await this.ContactsRepository.create({
      conDescription,
      conType,
      useID: user,
    });

    return contacts;
  }
}

export default CreateContactsService;
