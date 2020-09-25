import { injectable, inject } from 'tsyringe';

import IColorsRepository from '@modules/colors/repositories/IColorsRepository';

import Colors from '../infra/typeorm/entities/Colors';

@injectable()
class FindAllService {
  constructor(
    @inject('ColorsRepository')
    private ColorsRepository: IColorsRepository,
  ) {}

  public async execute(): Promise<Colors[]> {
    const colors = await this.ColorsRepository.findAll();

    return colors;
  }
}

export default FindAllService;
