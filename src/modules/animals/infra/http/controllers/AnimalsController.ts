import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAnimalsService from '@modules/animals/services/CreateAnimalsService';

export default class AnimalsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, userID } = request.body;

    const createAnimals = container.resolve(CreateAnimalsService);

    const animal = await createAnimals.execute({
      name,
      userID,
    });

    return response.json(animal);
  }
}
