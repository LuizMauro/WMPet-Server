import Color from '../infra/typeorm/entities/Colors';
import ICreateColorsDTO from '../dtos/ICreateColorsDTO';

export default interface IColorsRepository {
  create(data: ICreateColorsDTO): Promise<Color>;
  save(color: Color): Promise<Color>;
}
