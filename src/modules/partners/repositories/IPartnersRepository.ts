import Partners from '../infra/typeorm/entities/Partners';
import ICreatePartnersDTO from '../dtos/ICreatePartnersDTO';

export default interface ICreatePartnersRepository {
  findAll(): Promise<Partners[] | []>;
  findById(id: string): Promise<Partners | undefined>;
  findByRange(lng: string, lat: string): Promise<Partners[] | []>;
  create(data: ICreatePartnersDTO): Promise<Partners>;
  save(partners: Partners): Promise<Partners>;
}
