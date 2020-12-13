import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';

import CreateSearchAnimalsService from '@modules/search_animals/services/CreateSearchAnimalsService';
import FindAllSearchAnimalsService from '@modules/search_animals/services/FindAllService';
import FindBydID from '@modules/search_animals/services/FindById';

export default class SearchAnimalsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findAllSearchAnimalsService = container.resolve(
      FindAllSearchAnimalsService,
    );
    const searchAnimals = await findAllSearchAnimalsService.execute();

    return response.json(classToPlain(searchAnimals));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      aniID,
      seaDescription,
      seaEventDate,
      seaLatitude,
      seaLongitude,
      seaReward,
    } = request.body;

    const createSearchAnimal = container.resolve(CreateSearchAnimalsService);
    console.log(request.user.useID);

    const seaStatus = true;

    const searchAnimal = await createSearchAnimal.execute({
      aniID,
      seaDescription,
      seaEventDate,
      seaLatitude,
      seaLongitude,
      seaReward,
      seaStatus,
      useID: request.user.useID,
    });

    return response.json(classToPlain(searchAnimal));
  }

  public async getId(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findAnimal = container.resolve(FindBydID);

    const animal = await findAnimal.execute(id);

    return response.json(classToPlain(animal));
  }
}
