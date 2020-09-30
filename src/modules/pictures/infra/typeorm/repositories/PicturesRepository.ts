import { getRepository, Repository } from 'typeorm';

import IPicturesRepository from '@modules/pictures/repositories/IPicturesRepository';
import ICreatePicturesDTO from '@modules/pictures/dtos/ICreatePicturesDTO';

import Pictures from '../entities/Pictures';

class PicturesRepository implements IPicturesRepository {
  private ormRepository: Repository<Pictures>;

  constructor() {
    this.ormRepository = getRepository(Pictures);
  }

  public async findById(id: string): Promise<Pictures | undefined> {
    const pictures = await this.ormRepository.findOne({ where: { picID: id } });

    return pictures;
  }


  public async findAll(): Promise<Pictures[] | []>{
    const pictures = await this.ormRepository.find();
    return pictures || [];
  }

  public async create({
    picPath,
    picStatus,
    picPrimary,
    aniID,
  }: ICreatePicturesDTO): Promise<Pictures> {   
    
    const pictures = this.ormRepository.create({
      picPath,
      picStatus,
      picPrimary,
      aniID
    });

    await this.ormRepository.save(pictures);

    return pictures;
  }

  public async save(pictures: Pictures): Promise<Pictures> {
    return this.ormRepository.save(pictures);
  }
}

export default PicturesRepository;
