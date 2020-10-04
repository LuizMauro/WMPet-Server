import SearchAnimal from '../infra/typeorm/entities/SearchAnimal';
import ICreateSearchAnimalsDTO from '../dtos/ICreateSearchAnimalsDTO';

export default interface IUserRepository {
  findByRange(lng: number, lat: number): Promise<SearchAnimal[] | []>;
  findAll(): Promise<SearchAnimal[] | []>;
  findById(id: string): Promise<SearchAnimal | undefined>;
  findByEmail(email: string): Promise<SearchAnimal | undefined>;
  create(data: ICreateSearchAnimalsDTO): Promise<SearchAnimal>;
  save(user: SearchAnimal): Promise<SearchAnimal>;
}
