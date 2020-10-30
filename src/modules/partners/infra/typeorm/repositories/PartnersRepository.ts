import { getRepository, Repository } from 'typeorm';

import IPartnersRepository from '@modules/partners/repositories/IPartnersRepository';
import ICreatePartnersDTO from '@modules/partners/dtos/ICreatePartnersDTO';

import Partners from '../entities/Partners';

class PartnersRepository implements IPartnersRepository {
  private ormRepository: Repository<Partners>;

  constructor() {
    this.ormRepository = getRepository(Partners);
  }

  public async findAll(): Promise<Partners[] | []> {
    const partners = await this.ormRepository.find();

    return partners || [];
  }

  public async create({
    parCEP,
    parCNPJ,
    parCity,
    parDistrict,
    parName,
    parPicture,
    parState,
    parStreet,
  }: ICreatePartnersDTO): Promise<Partners> {
    const partners = this.ormRepository.create({
      parCEP,
      parCNPJ,
      parCity,
      parDistrict,
      parName,
      parPicture,
      parState,
      parStreet,
    });

    await this.ormRepository.save(partners);

    return partners;
  }

  public async save(partners: Partners): Promise<Partners> {
    return this.ormRepository.save(partners);
  }
}

export default PartnersRepository;
