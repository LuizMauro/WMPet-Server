import { injectable, inject } from 'tsyringe';

import ISearchAnimalRepository from '@modules/search_animals/repositories/ISearchAnimalRepository';

import SearchAnimal from '../infra/typeorm/entities/SearchAnimal';

@injectable()
class FindAllService {
  constructor(
    @inject('SearchAnimalRepository')
    private searchAnimalRepository: ISearchAnimalRepository,
  ) {}

  public async execute(): Promise<SearchAnimal[]> {
    const searchAnimal = await this.searchAnimalRepository.findAll();

    return searchAnimal;
  }
}

export default FindAllService;
