import { injectable, inject } from 'tsyringe';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import AppError from '@shared/errors/AppErros';
import Animal from '../infra/typeorm/entities/Animals';

interface IRequest {
  useID: string;
}

@injectable()
class FindAllService {
  constructor(
    @inject('AnimalsRepository')
    private animalsRepository: IAnimalsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ useID }: IRequest): Promise<Animal[]> {
    const user = await this.usersRepository.findById(useID);

    if (!user) {
      throw new AppError('User not found.');
    }

    const animal = await this.animalsRepository.findByUser(user.useID);

    return animal;
  }
}

export default FindAllService;
