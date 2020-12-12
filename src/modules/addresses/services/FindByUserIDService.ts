import { injectable, inject } from 'tsyringe';

import IAddressRepository from '@modules/addresses/repositories/IAddressesRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import AppError from '@shared/errors/AppErros';
import Addresses from '../infra/typeorm/entities/Addresses';

interface IRequest {
  useID: string;
}

@injectable()
class FindByUserIDService {
  constructor(
    @inject('AddressesRepository')
    private addressesRepository: IAddressRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ useID }: IRequest): Promise<Addresses[]> {
    const user = await this.usersRepository.findById(useID);

    if (!user) {
      throw new AppError('User not found.');
    }

    const addresses = await this.addressesRepository.findByUser(user.useID);

    return addresses;
  }
}

export default FindByUserIDService;
