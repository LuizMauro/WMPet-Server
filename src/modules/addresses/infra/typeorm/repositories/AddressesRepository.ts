import { getRepository, Repository } from 'typeorm';

import IAddressesRepository from '@modules/addresses/repositories/IAddressesRepository';
import ICreateAddressesDTO from '@modules/addresses/dtos/ICreateAddressDTO';

import Addresses from '../entities/Addresses';

class AddressesRepository implements IAddressesRepository {
  private ormRepository: Repository<Addresses>;

  constructor() {
    this.ormRepository = getRepository(Addresses);
  }

  public async findAll(): Promise<Addresses[] | []> {
    const addresses = await this.ormRepository.find();

    return addresses || [];
  }

  public async create({
    addCEP,
    addStreet,
    addDistrict,
    addCity,
    addState,
    useID,
  }: ICreateAddressesDTO): Promise<Addresses> {
    const address = this.ormRepository.create({
      addCEP,
      addStreet,
      addDistrict,
      addCity,
      addState,
      useID,
    });

    await this.ormRepository.save(address);

    return address;
  }

  public async save(address: Addresses): Promise<Addresses> {
    return this.ormRepository.save(address);
  }

  public async findByUser(useID: string): Promise<Addresses[] | []> {
    const address = await this.ormRepository.find({
      where: { useID },
    });

    return address || [];
  }
}

export default AddressesRepository;
