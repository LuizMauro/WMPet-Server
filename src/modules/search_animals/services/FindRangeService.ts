import { injectable, inject } from 'tsyringe';

import ISearchAnimalRepository from '@modules/search_animals/repositories/ISearchAnimalRepository';

import SearchAnimal from '../infra/typeorm/entities/SearchAnimal';

@injectable()
class FindRangeService {
  constructor(
    @inject('SearchAnimalRepository')
    private searchAnimalRepository: ISearchAnimalRepository,
  ) {}

  public async execute(lng: string, lat: string): Promise<SearchAnimal[] | []> {
    const searchAnimal = await this.searchAnimalRepository.findByRange(
      lng,
      lat,
    );

    return searchAnimal || [];
  }
}

export default FindRangeService;
