import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';
import CreateAnimalsService from '@modules/animals/services/CreateAnimalsService';
import FindAllAnimalService from '@modules/animals/services/FindAllService';

export default class AnimalsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findAllAnimalsService = container.resolve(FindAllAnimalService);
    const animals = await findAllAnimalsService.execute();

    return response.json(classToPlain(animals));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      aniName,
      aniDescription,
      aniGenre,
      aniSize,
      aniSpecies,
      colID,
      racID,
      furID,
    } = request.body;

    const createAnimals = container.resolve(CreateAnimalsService);

    const animal = await createAnimals.execute({
      aniName,
      aniGenre,
      aniSize,
      aniSpecies,
      aniDescription,
      userID: request.user.useID,
      colID,
      racID,
      furID,
    });

    return response.json(classToPlain(animal));
  }
}
