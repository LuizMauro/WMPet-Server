import { getRepository, Repository } from 'typeorm';

import IColorsRepository from '@modules/colors/repositories/IColorsRepository';
import ICreateColorsDTO from '@modules/colors/dtos/ICreateColorsDTO';

import Colors from '../entities/Colors';

class ColorsRepository implements IColorsRepository {
  private ormRepository: Repository<Colors>;

  constructor() {
    this.ormRepository = getRepository(Colors);
  }

  public async findById(id: string): Promise<Colors | undefined> {
    const color = await this.ormRepository.findOne({ where: { colID: id } });

    return color;
  }

  public async create({ colDescription }: ICreateColorsDTO): Promise<Colors> {
    const color = this.ormRepository.create({
      colDescription,
    });

    await this.ormRepository.save(color);

    return color;
  }

  public async save(color: Colors): Promise<Colors> {
    return this.ormRepository.save(color);
  }
}

export default ColorsRepository;
