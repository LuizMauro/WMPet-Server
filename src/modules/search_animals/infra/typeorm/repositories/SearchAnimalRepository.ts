import { getRepository, Repository } from 'typeorm';

import ISearchAnimalRepository from '@modules/search_animals/repositories/ISearchAnimalRepository';
import ICreateSearchAnimalsDTO from '@modules/search_animals/dtos/ICreateSearchAnimalsDTO';

import SearchAnimal from '../entities/SearchAnimal';

class SearchAnimalRepository implements ISearchAnimalRepository {
  private ormRepository: Repository<SearchAnimal>;

  constructor() {
    this.ormRepository = getRepository(SearchAnimal);
  }

  public async findAll(): Promise<SearchAnimal[] | []> {
    const searchAnimal = await this.ormRepository.find();

    return searchAnimal || [];
  }

  public async findById(id: string): Promise<SearchAnimal | undefined> {
    const searchAnimal = await this.ormRepository.findOne({
      where: { useID: id },
    });

    return searchAnimal;
  }

  public async findByEmail(email: string): Promise<SearchAnimal | undefined> {
    const searchAnimal = await this.ormRepository.findOne({
      where: { useEmail: email },
    });

    return searchAnimal;
  }

  public async create({
    aniID,
    seaDescription,
    seaEventDate,
    seaLatitude,
    seaLongitude,
    seaReward,
    seaStatus,
    useID,
  }: ICreateSearchAnimalsDTO): Promise<SearchAnimal> {
    const searchAnimal = this.ormRepository.create({
      aniID,
      seaDescription,
      seaEventDate,
      seaLatitude,
      seaLongitude,
      seaReward,
      seaStatus,
      useID,
    });

    await this.ormRepository.save(searchAnimal);

    return searchAnimal;
  }

  public async save(searchAnimal: SearchAnimal): Promise<SearchAnimal> {
    return this.ormRepository.save(searchAnimal);
  }
}

export default SearchAnimalRepository;
