import { injectable, inject } from 'tsyringe';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';

import Animals from '../infra/typeorm/entities/Animals';

interface IRequest {
  name: string;
  userID: string;
}

@injectable()
class CreateAnimalsService {
  constructor(
    @inject('AnimalsRepository')
    private animalsRepository: IAnimalsRepository,
  ) {}

  public async execute({ name, userID }: IRequest): Promise<Animals> {
    const animal = await this.animalsRepository.create({ name, userID });

    return animal;
  }
}

export default CreateAnimalsService;
