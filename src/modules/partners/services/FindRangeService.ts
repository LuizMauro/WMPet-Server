import { injectable, inject } from 'tsyringe';

import IPartnersRepository from '@modules/partners/repositories/IPartnersRepository';

import Partners from '../infra/typeorm/entities/Partners';

@injectable()
class FindRangeService {
  constructor(
    @inject('PartnersRepository')
    private partnersRepository: IPartnersRepository,
  ) {}

  public async execute(lng: string, lat: string): Promise<Partners[] | []> {
    const partners = await this.partnersRepository.findByRange(lng, lat);

    return partners || [];
  }
}

export default FindRangeService;
