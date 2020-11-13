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
    parLatitude,
    parLongitude,
    parStatus,
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
      parLatitude,
      parLongitude,
      parStatus,
    });

    await this.ormRepository.save(partners);

    return partners;
  }

  public async save(partners: Partners): Promise<Partners> {
    return this.ormRepository.save(partners);
  }

  public async findByRange(lng: string, lat: string): Promise<Partners[] | []> {
    // lat = -22.8476202;
    // lng = -45.3218702;

    const partners = await this.ormRepository
      .createQueryBuilder('par_partners')
      .addSelect('par_partners.*')
      .addSelect(
        `( 6371 * acos( cos( radians(${lat}) ) * cos( radians( parLatitude ) ) * cos( radians( parLongitude ) - radians(${lng}) ) + sin( radians(${lat}) ) * sin( radians( parLatitude ) ) ) )`,
        'distance',
      )

      .having('distance <= 20')
      .orderBy('parDateCreated')

      .getMany();

    return partners || [];
  }
}

export default PartnersRepository;
