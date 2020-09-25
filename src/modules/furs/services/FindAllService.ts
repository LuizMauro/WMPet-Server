import { injectable, inject } from 'tsyringe';

import IFursRepository from '@modules/furs/repositories/IFursRepository';

import Fur from '../infra/typeorm/entities/Furs';

@injectable()
class FindAllService {
  constructor(
    @inject('FurRepository')
    private fursRepository: IFursRepository,
  ) {}

  public async execute(): Promise<Fur[]> {
    const furs = await this.fursRepository.findAll();

    return furs;
  }
}

export default FindAllService;
