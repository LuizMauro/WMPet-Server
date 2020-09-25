import Animal from '../infra/typeorm/entities/Animals';
import ICreateAnimalsDTO from '../dtos/ICreateAnimalsDTO';

export default interface IAnimalsRepository {
  findAll(): Promise<Animal[] | []>;
  create(data: ICreateAnimalsDTO): Promise<Animal>;
  save(animal: Animal): Promise<Animal>;
}
