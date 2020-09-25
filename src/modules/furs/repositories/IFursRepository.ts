import Fur from '../infra/typeorm/entities/Furs';
import ICreateFursDTO from '../dtos/ICreateFursDTO';

export default interface IFursRepository {
  findAll(): Promise<Fur[] | []>;
  create(data: ICreateFursDTO): Promise<Fur>;
  save(fur: Fur): Promise<Fur>;
}
