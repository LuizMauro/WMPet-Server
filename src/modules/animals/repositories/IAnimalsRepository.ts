import Animal from '../infra/typeorm/entities/Animals';
import ICreateAnimalsDTO from '../dtos/ICreateAnimalsDTO';

export default interface IAnimalsRepository {
  findAll(): Promise<Animal[] | []>;
  findById(id: string): Promise<Animal | undefined>;
  create(data: ICreateAnimalsDTO): Promise<Animal>;
  save(animal: Animal): Promise<Animal>;
}
