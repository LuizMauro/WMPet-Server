import { hash } from 'bcryptjs';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppErros';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IContactRepository from '@modules/contacts/repositories/IContactsRepository';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  useName: string;
  useEmail: string;
  usePasswordHash: string;
  conDescription: string;
  conType: boolean;
  useLongitude: string;
  useLatitude: string;
  useDeviceID: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('ContactRepository')
    private contactRepository: IContactRepository,
  ) {}

  public async execute({
    useName,
    useEmail,
    usePasswordHash,
    conDescription,
    conType,
    useDeviceID,
    useLatitude,
    useLongitude,
  }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(useEmail);

    if (checkUserExists) {
      throw new AppError('Email já utilizado!');
    }

    const hashedPassword = await hash(usePasswordHash, 8);

    const user = await this.usersRepository.create({
      useName,
      useEmail,
      usePasswordHash: hashedPassword,
      useDeviceID,
      useLatitude,
      useLongitude,
    });

    await this.contactRepository.create({
      conDescription,
      conType,
      useID: user,
    });

    return user;
  }
}

export default CreateUserService;
