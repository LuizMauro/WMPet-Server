import { hash } from 'bcryptjs';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppErros';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  useName: string;
  useEmail: string;
  usePasswordHash: string;
  filename?: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    useName,
    useEmail,
    usePasswordHash,
    filename,
  }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(useEmail);

    if (checkUserExists) {
      throw new AppError('Email já utilizado!');
    }

    const hashedPassword = await hash(usePasswordHash, 8);

    let user;
    if (filename) {
      const finalFileName = await this.storageProvider.saveFile(filename);

      user = await this.usersRepository.create({
        useName,
        useEmail,
        usePasswordHash: hashedPassword,
        usePhoto: finalFileName,
      });
    } else {
      user = await this.usersRepository.create({
        useName,
        useEmail,
        usePasswordHash: hashedPassword,
      });
    }

    return user;
  }
}

export default CreateUserService;
