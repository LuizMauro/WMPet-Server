import { injectable, inject } from 'tsyringe';

import IPicturesRepository from '@modules/pictures/repositories/IPicturesRepository';
import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

import AppError from '@shared/errors/AppErros';

import Pictures from '../infra/typeorm/entities/Pictures';

interface IRequest {
  picPath: string;
  picPrimary: boolean;
  picStatus: boolean;
  aniID: string;
}

@injectable()
class CreatePicturesService {
  constructor(
    @inject('StorageProvider')
    private storageProvider: IStorageProvider,

    @inject('PicturesRepository')
    private picturesRepository: IPicturesRepository,

    @inject('AnimalsRepository')
    private animalsRepository: IAnimalsRepository,
  ) {}

  public async execute({
    picPath,
    picPrimary,
    picStatus,
    aniID,
  }: IRequest): Promise<Pictures> {
    const animal = await this.animalsRepository.findById(aniID);

    if (!animal) {
      throw new AppError('Animal does not exists');
    }

    const pictures = await this.picturesRepository.create({
      picPath,
      picPrimary,
      picStatus,
      aniID: animal,
    });

    return pictures;
  }
}

export default CreatePicturesService;
