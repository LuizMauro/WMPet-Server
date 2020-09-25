import { injectable, inject } from 'tsyringe';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import AppError from '@shared/errors/AppErros';
import Animals from '../infra/typeorm/entities/Animals';

interface IRequest {
  aniName: string;
  userID: string;
  aniGenre: string;
  aniSize: string;
  aniSpecies: boolean;
  aniDescription: string;
}

@injectable()
class CreateAnimalsService {
  constructor(
    @inject('AnimalsRepository')
    private animalsRepository: IAnimalsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    aniName,
    aniDescription,
    aniGenre,
    aniSize,
    aniSpecies,
    userID,
  }: IRequest): Promise<Animals> {
    console.log(userID);
    const user = await this.usersRepository.findById(userID);
    console.log(user);

    if (!user) {
      throw new AppError('Customer does not exists');
    }

    const animal = await this.animalsRepository.create({
      aniName,
      aniDescription,
      aniGenre,
      aniSize,
      aniSpecies,
      userID: user,
    });

    return animal;
  }
}

export default CreateAnimalsService;
