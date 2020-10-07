import { injectable, inject } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';


import User from '../infra/typeorm/entities/User';
import Animal from '../../animals/infra/typeorm/entities/Animals';
import { response } from 'express';

interface IRequest{
    user: User;
}

@injectable()
class FindAllService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('AnimalRepository')
    private animalsRepository: IAnimalsRepository,
    ) {}

  public async execute(): Promise<User[]> {

    const users = await this.usersRepository.findById(response);

    return users;
  }
}

export default FindAllService;
