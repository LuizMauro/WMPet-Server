import Pictures from '../infra/typeorm/entities/Pictures';
import ICreatePicturesDTO from '../dtos/ICreatePicturesDTO';

export default interface IPicturesRepository {
  findById(id: string): Promise<Pictures | undefined>;
  findAll(): Promise<Pictures[] | []>;
  create(data: ICreatePicturesDTO): Promise<Pictures>;
  save(picture: Pictures): Promise<Pictures>;
}
