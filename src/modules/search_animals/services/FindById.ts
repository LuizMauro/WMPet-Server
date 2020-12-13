import { injectable, inject } from 'tsyringe';

import ISearchAnimalRepository from '@modules/search_animals/repositories/ISearchAnimalRepository';

import AppError from '@shared/errors/AppErros';
import SearchAnimal from '../infra/typeorm/entities/SearchAnimal';

@injectable()
class FindAllService {
  constructor(
    @inject('SearchAnimalRepository')
    private searchAnimalRepository: ISearchAnimalRepository,
  ) {}

  public async execute(id: string): Promise<SearchAnimal> {
    console.log(id);
    const searchAnimal = await this.searchAnimalRepository.findById(id);

    if (!searchAnimal) {
      throw new AppError('animal does not exists');
    }

    return searchAnimal;
  }
}

export default FindAllService;
