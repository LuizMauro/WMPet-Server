import { injectable, inject } from 'tsyringe';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IColorsRespository from '@modules/colors/repositories/IColorsRepository';
import IRacesRespository from '@modules/races/repositories/IRacesRepository';
import IFursRepository from '@modules/furs/repositories/IFursRepository';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

import AppError from '@shared/errors/AppErros';
import IPicturesRepository from '@modules/pictures/repositories/IPicturesRepository';
import Animals from '../infra/typeorm/entities/Animals';

interface IRequest {
  aniName: string;
  userID: string;
  aniGenre: string;
  aniSize: string;
  aniSpecies: boolean;
  aniDescription: string;
  colID: string;
  racID: string;
  furID: string;
  filename1?: string;
  filename2?: string;
  filename3?: string;
}

@injectable()
class CreateAnimalsService {
  constructor(
    @inject('AnimalsRepository')
    private animalsRepository: IAnimalsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('ColorsRepository')
    private colorsRepository: IColorsRespository,

    @inject('RacesRepository')
    private racesRepository: IRacesRespository,

    @inject('FurRepository')
    private fursRepository: IFursRepository,

    @inject('PicturesRepository')
    private picturesRepository: IPicturesRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    aniName,
    aniDescription,
    aniGenre,
    aniSize,
    aniSpecies,
    userID,
    colID,
    racID,
    furID,
    filename1,
    filename2,
    filename3,
  }: IRequest): Promise<Animals> {
    const user = await this.usersRepository.findById(userID);
    const color = await this.colorsRepository.findById(colID);
    const race = await this.racesRepository.findById(racID);
    const fur = await this.fursRepository.findById(furID);

    if (!user) {
      throw new AppError('User does not exists');
    }

    if (!color) {
      throw new AppError('Color does not exists');
    }

    if (!race) {
      throw new AppError('Race does not exists');
    }

    if (!fur) {
      throw new AppError('Fur does not exists');
    }

    const animal = await this.animalsRepository.create({
      aniName,
      aniDescription,
      aniGenre,
      aniSize,
      aniSpecies,
      userID: user,
      colID: color,
      racID: race,
      furID: fur,
    });

    if (filename1) {
      const finalFileName1 = await this.storageProvider.saveFile(filename1);
      await this.picturesRepository.create({
        picPath: finalFileName1,
        picPrimary: true,
        picStatus: true,
        aniID: animal,
      });
    }

    if (filename2) {
      const finalFileName2 = await this.storageProvider.saveFile(filename2);
      await this.picturesRepository.create({
        picPath: finalFileName2,
        picPrimary: false,
        picStatus: true,
        aniID: animal,
      });
    }

    if (filename3) {
      const finalFileName3 = await this.storageProvider.saveFile(filename3);
      await this.picturesRepository.create({
        picPath: finalFileName3,
        picPrimary: false,
        picStatus: true,
        aniID: animal,
      });
    }

    return animal;
  }
}

export default CreateAnimalsService;
