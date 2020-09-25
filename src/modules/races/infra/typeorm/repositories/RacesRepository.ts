import { getRepository, Repository } from 'typeorm';

import IRacesRepository from '@modules/races/repositories/IRacesRepository';
import ICreateRaceDTO from '@modules/races/dtos/ICreateRacesDTO';

import Races from '../entities/Race';

class RacesRepository implements IRacesRepository {
  private ormRepository: Repository<Races>;

  constructor() {
    this.ormRepository = getRepository(Races);
  }

  public async findAll(): Promise<Races[] | []> {
    const races = await this.ormRepository.find();

    return races || [];
  }

  public async findById(id: string): Promise<Races | undefined> {
    const color = await this.ormRepository.findOne({ where: { racID: id } });

    return color;
  }

  public async create({
    racDescription,
    racType,
  }: ICreateRaceDTO): Promise<Races> {
    const race = this.ormRepository.create({
      racDescription,
      racType,
    });

    await this.ormRepository.save(race);

    return race;
  }

  public async save(color: Races): Promise<Races> {
    return this.ormRepository.save(color);
  }
}

export default RacesRepository;
