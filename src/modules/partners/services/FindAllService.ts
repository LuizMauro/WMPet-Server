import { injectable, inject } from 'tsyringe';

import IPartnersRepository from '@modules/partners/repositories/IPartnersRepository';

import Partners from '../infra/typeorm/entities/Partners';

@injectable()
class FindAllService {
  constructor(
    @inject('PartnersRepository')
    private partnersRepository: IPartnersRepository,
  ) {}

  public async execute(): Promise<Partners[]> {
    const partners = await this.partnersRepository.findAll();

    return partners;
  }
}

export default FindAllService;
