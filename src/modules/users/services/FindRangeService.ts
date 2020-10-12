import { injectable, inject } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

@injectable()
class FindRangeService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(lng: number, lat: number): Promise<User[] | []> {
    const users = await this.usersRepository.findByRange(lng, lat);

    return users || [];
  }
}

export default FindRangeService;
