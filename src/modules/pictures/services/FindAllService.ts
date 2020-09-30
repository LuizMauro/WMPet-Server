import { injectable, inject } from 'tsyringe';

import IPicturesRepository from '@modules/pictures/repositories/IPicturesRepository';

import Pictures from '../infra/typeorm/entities/Pictures';

@injectable()
class FindAllService {
  constructor(
    @inject('PicturesRepository')
    private picturesRepository: IPicturesRepository,
  ) {}

  public async execute(): Promise<Pictures[]> {
    const picture = await this.picturesRepository.findAll();

    return picture;
  }
}

export default FindAllService;
