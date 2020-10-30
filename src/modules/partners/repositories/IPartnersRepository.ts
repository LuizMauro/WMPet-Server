import Partners from '../infra/typeorm/entities/Partners';
import ICreatePartnersDTO from '../dtos/ICreatePartnersDTO';

export default interface ICreatePartnersRepository {
  findAll(): Promise<Partners[] | []>;
  create(data: ICreatePartnersDTO): Promise<Partners>;
  save(partners: Partners): Promise<Partners>;
}
