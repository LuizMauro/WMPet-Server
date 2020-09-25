import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';
import CreateAnimalsService from '@modules/animals/services/CreateAnimalsService';

export default class AnimalsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      aniName,
      aniDescription,
      aniGenre,
      aniSize,
      aniSpecies,
      colID,
      racID,
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
    });

    return response.json(classToPlain(animal));
  }
}
