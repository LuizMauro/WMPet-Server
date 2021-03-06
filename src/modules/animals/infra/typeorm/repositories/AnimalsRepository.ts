import { getRepository, Repository } from 'typeorm';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';
import ICreateAnimalsDTO from '@modules/animals/dtos/ICreateAnimalsDTO';

import Animal from '../entities/Animals';

class AnimalsRepository implements IAnimalsRepository {
  private ormRepository: Repository<Animal>;

  constructor() {
    this.ormRepository = getRepository(Animal);
  }

  public async findAll(): Promise<Animal[] | []> {
    const animal = await this.ormRepository.find({ relations: ['photos'] });

    return animal || [];
  }

  public async findById(id: string): Promise<Animal | undefined> {
    const animal = await this.ormRepository.findOne({
      where: { aniID: id },
      relations: ['photos'],
    });

    return animal;
  }

  public async findByUser(userID: string): Promise<Animal[] | []> {
    const animal = await this.ormRepository.find({
      where: { userID },
      relations: ['photos'],
    });

    return animal || [];
  }

  public async create({
    aniName,
    aniGenre,
    aniSize,
    aniSpecies,
    aniDescription,
    userID,
    colID,
    racID,
    furID,
  }: ICreateAnimalsDTO): Promise<Animal> {
    const animal = this.ormRepository.create({
      aniName,
      aniGenre,
      aniSize,
      aniSpecies,
      aniDescription,
      userID,
      colID,
      racID,
      furID,
    });

    await this.ormRepository.save(animal);

    return animal;
  }

  public async save(animal: Animal): Promise<Animal> {
    return this.ormRepository.save(animal);
  }
}

export default AnimalsRepository;
