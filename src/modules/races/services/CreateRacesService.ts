import { injectable, inject } from 'tsyringe';

import IRacesRepository from '@modules/races/repositories/IRacesRepository';

import Race from '../infra/typeorm/entities/Race';

interface IRequest {
  racDescription: string;
  racType: boolean;
}

@injectable()
class CreateColorsService {
  constructor(
    @inject('RacesRepository')
    private RacesRepository: IRacesRepository,
  ) {}

  public async execute({ racType, racDescription }: IRequest): Promise<Race> {
    const race = await this.RacesRepository.create({
      racDescription,
      racType,
    });

    return race;
  }
}

export default CreateColorsService;
