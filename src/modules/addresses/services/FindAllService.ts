import { injectable, inject } from 'tsyringe';

import IAddressesRepository from '@modules/addresses/repositories/IAddressesRepository';

import Addresses from '../infra/typeorm/entities/Addresses';

@injectable()
class FindAllService {
  constructor(
    @inject('AddressesRepository')
    private AddressesRepository: IAddressesRepository,
  ) {}

  public async execute(): Promise<Addresses[]> {
    const addresses = await this.AddressesRepository.findAll();

    return addresses;
  }
}

export default FindAllService;
