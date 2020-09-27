import { injectable, inject } from 'tsyringe';

import IAddressesRepository from '@modules/addresses/repositories/IAddressesRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import AppError from '@shared/errors/AppErros';

import Addresses from '../infra/typeorm/entities/Addresses';

interface IRequest {
  addCEP: string;
  addStreet: string;
  addDistrict: string;
  addCity: string;
  addState: string;
  useID: string;
}

@injectable()
class CreateAddressesService {
  constructor(
    @inject('AddressesRepository')
    private AddressesRepository: IAddressesRepository,
    @inject('UsersRepository')
    private UsersRepository: IUsersRepository,
  ) {}

  public async execute({
    addCEP,
    addStreet,
    addDistrict,
    addCity,
    addState,
    useID,
  }: IRequest): Promise<Addresses> {
    const user = await this.UsersRepository.findById(useID);
    if (!user) {
      throw new AppError('User does not exists');
    }
    const address = await this.AddressesRepository.create({
      addCEP,
      addStreet,
      addDistrict,
      addCity,
      addState,
      useID: user,
    });

    return address;
  }
}

export default CreateAddressesService;
