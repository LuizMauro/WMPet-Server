import { injectable, inject } from 'tsyringe';

import IRacesRepository from '@modules/races/repositories/IRacesRepository';

import Race from '../infra/typeorm/entities/Race';

@injectable()
class FindAllService {
  constructor(
    @inject('RacesRepository')
    private racesRepository: IRacesRepository,
  ) {}

  public async execute(): Promise<Race[]> {
    const races = await this.racesRepository.findAll();

    return races;
  }
}

export default FindAllService;
