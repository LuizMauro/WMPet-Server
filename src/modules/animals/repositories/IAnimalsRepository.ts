import Animals from '../infra/typeorm/entities/Animals';
import ICreateUserDTO from '../dtos/ICreateAnimalsDTO';

export default interface IAnimalsRepository {
  findById(id: string): Promise<Animals | undefined>;
  findByEmail(email: string): Promise<Animals | undefined>;
  create(data: ICreateUserDTO): Promise<Animals>;
  save(user: Animals): Promise<Animals>;
}
