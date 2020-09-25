import { injectable, inject } from 'tsyringe';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IColorsRespository from '@modules/colors/repositories/IColorsRepository';

import AppError from '@shared/errors/AppErros';
import Animals from '../infra/typeorm/entities/Animals';

interface IRequest {
  aniName: string;
  userID: string;
  aniGenre: string;
  aniSize: string;
  aniSpecies: boolean;
  aniDescription: string;
  colID: string;
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
  ) {}

  public async execute({
    aniName,
    aniDescription,
    aniGenre,
    aniSize,
    aniSpecies,
    userID,
    colID,
  }: IRequest): Promise<Animals> {
    const user = await this.usersRepository.findById(userID);
    const color = await this.colorsRepository.findById(colID);

    if (!user) {
      throw new AppError('User does not exists');
    }

    if (!color) {
      throw new AppError('Color does not exists');
    }

    const animal = await this.animalsRepository.create({
      aniName,
      aniDescription,
      aniGenre,
      aniSize,
      aniSpecies,
      userID: user,
      colID: color,
    });

    return animal;
  }
}

export default CreateAnimalsService;
