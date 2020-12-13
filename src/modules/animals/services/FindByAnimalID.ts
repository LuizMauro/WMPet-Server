import { injectable, inject } from 'tsyringe';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';

import AppError from '@shared/errors/AppErros';
import Animal from '../infra/typeorm/entities/Animals';

interface IRequest {
  aniID: string;
}

@injectable()
class FindByAnimalID {
  constructor(
    @inject('AnimalsRepository')
    private animalsRepository: IAnimalsRepository,
  ) {}

  public async execute({ aniID }: IRequest): Promise<Animal> {
    const animal = await this.animalsRepository.findById(aniID);

    if (!animal) {
      throw new AppError('Animal not found.');
    }

    return animal;
  }
}

export default FindByAnimalID;
