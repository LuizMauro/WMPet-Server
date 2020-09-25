import Race from '../infra/typeorm/entities/Race';
import ICreateRacesDTO from '../dtos/ICreateRacesDTO';

export default interface IRacesRepository {
  findById(id: string): Promise<Race | undefined>;
  create(data: ICreateRacesDTO): Promise<Race>;
  save(color: Race): Promise<Race>;
}
