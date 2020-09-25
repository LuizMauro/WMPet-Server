import { getRepository, Repository } from 'typeorm';

import IFursRepository from '@modules/furs/repositories/IFursRepository';
import ICreateFursDTO from '@modules/furs/dtos/ICreateFursDTO';

import Furs from '../entities/Furs';

class FursRepository implements IFursRepository {
  private ormRepository: Repository<Furs>;

  constructor() {
    this.ormRepository = getRepository(Furs);
  }

  public async findAll(): Promise<Furs[] | []> {
    const furs = await this.ormRepository.find();

    return furs || [];
  }

  public async create({ furDescription }: ICreateFursDTO): Promise<Furs> {
    const fur = this.ormRepository.create({
      furDescription,
    });

    await this.ormRepository.save(fur);

    return fur;
  }

  public async save(furs: Furs): Promise<Furs> {
    return this.ormRepository.save(furs);
  }
}

export default FursRepository;
