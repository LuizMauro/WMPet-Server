import { getRepository, Repository } from 'typeorm';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';
import ICreateAnimalsDTO from '@modules/animals/dtos/ICreateAnimalsDTO';

import Animals from '../entities/Animals';

class AnimalsRepository implements IAnimalsRepository {
  private ormRepository: Repository<Animals>;

  constructor() {
    this.ormRepository = getRepository(Animals);
  }

  public async findById(id: string): Promise<Animals | undefined> {
    const animal = await this.ormRepository.findOne({ where: { aniID: id } });

    return animal;
  }

  public async findByEmail(email: string): Promise<Animals | undefined> {
    const animal = await this.ormRepository.findOne({
      where: { useEmail: email },
    });

    return animal;
  }

  public async create({ name, userID }: ICreateAnimalsDTO): Promise<Animals> {
    const animal = this.ormRepository.create({ name, userID });

    await this.ormRepository.save(animal);

    return animal;
  }

  public async save(user: Animals): Promise<Animals> {
    return this.ormRepository.save(user);
  }
}

export default AnimalsRepository;
