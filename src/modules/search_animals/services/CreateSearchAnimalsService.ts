import { injectable, inject, container } from 'tsyringe';

import AppError from '@shared/errors/AppErros';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';
import ISearchAnimalRepository from '@modules/search_animals/repositories/ISearchAnimalRepository';
import FindRangeService from '@modules/users/services/FindRangeService';
import { sendPushNotification } from '@shared/notifications/PushNotifications';
import SearchAnimal from '../infra/typeorm/entities/SearchAnimal';

interface IRequest {
  seaLongitude: string;
  seaLatitude: string;
  seaStatus: boolean;
  seaDescription: string;
  seaEventDate: Date;
  seaReward: string;
  useID: string;
  aniID: string;
}

@injectable()
class CreateSearchAnimalsService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('AnimalsRepository')
    private animalsRepository: IAnimalsRepository,

    @inject('SearchAnimalRepository')
    private searchAnimalRepository: ISearchAnimalRepository,
  ) {}

  public async execute({
    aniID,
    seaDescription,
    seaEventDate,
    seaLatitude,
    seaLongitude,
    seaReward,
    seaStatus,
    useID,
  }: IRequest): Promise<SearchAnimal> {
    const user = await this.usersRepository.findById(useID);
    const animal = await this.animalsRepository.findById(aniID);

    if (!user) {
      throw new AppError('User does not exists');
    }

    if (!animal) {
      throw new AppError('animal does not exists');
    }

    const searchAnimal = await this.searchAnimalRepository.create({
      seaDescription,
      seaEventDate,
      seaLatitude,
      seaLongitude,
      seaReward,
      seaStatus,
      aniID: animal,
      useID: user,
    });

    const findRangeService = container.resolve(FindRangeService);

    const lng = parseFloat(seaLongitude);
    const lat = parseFloat(seaLatitude);

    const users = await findRangeService.execute(lng, lat);

    const message = 'Ajude a encontrar esse pet!';
    const title = 'Pet perdido :(';
    const data = {
      to: 'AnimalPerdidoNotificacao',
      animalID: searchAnimal.seaID,
    };

    sendPushNotification({ users, title, message, data });

    return searchAnimal;
  }
}

export default CreateSearchAnimalsService;
