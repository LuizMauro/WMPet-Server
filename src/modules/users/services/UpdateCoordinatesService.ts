import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppErros';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  useID: string;
  useLongitude: string;
  useLatitude: string;
}

@injectable()
class UpdateCoordinatesService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    useID,
    useLatitude,
    useLongitude,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(useID);

    if (!user) {
      throw new AppError('User not found.');
    }

    user.useLatitude = useLatitude;
    user.useLongitude = useLongitude;

    return this.usersRepository.save(user);
  }
}

export default UpdateCoordinatesService;
