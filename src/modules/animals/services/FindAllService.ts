import { injectable, inject } from 'tsyringe';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';

import Animal from '../infra/typeorm/entities/Animals';

@injectable()
class FindAllService {
  constructor(
    @inject('AnimalsRepository')
    private animalsRepository: IAnimalsRepository,
  ) {}

  public async execute(): Promise<Animal[]> {
    const animal = await this.animalsRepository.findAll();

    return animal;
  }
}

export default FindAllService;
