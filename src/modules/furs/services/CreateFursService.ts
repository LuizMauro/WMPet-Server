import { injectable, inject } from 'tsyringe';

import IFursRepository from '@modules/furs/repositories/IFursRepository';

import Furs from '../infra/typeorm/entities/Furs';

interface IRequest {
  furDescription: string;
}

@injectable()
class CreateFursService {
  constructor(
    @inject('FurRepository')
    private fursRepository: IFursRepository,
  ) {}

  public async execute({ furDescription }: IRequest): Promise<Furs> {
    const fur = await this.fursRepository.create({
      furDescription,
    });

    return fur;
  }
}

export default CreateFursService;
