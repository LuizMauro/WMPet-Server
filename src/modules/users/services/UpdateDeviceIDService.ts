import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppErros';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  useDeviceID: string;
  useID: string;
}

@injectable()
class UpdateDeviceIDService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ useDeviceID, useID }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(useID);

    if (!user) {
      throw new AppError('User not found.');
    }

    user.useDeviceID = useDeviceID;

    return this.usersRepository.save(user);
  }
}

export default UpdateDeviceIDService;
