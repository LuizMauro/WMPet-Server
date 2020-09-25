import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';
import CreateFursService from '@modules/furs/services/CreateFursService';
import FindAllFursService from '@modules/furs/services/FindAllService';

export default class AnimalsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findAllFurssService = container.resolve(FindAllFursService);
    const furs = await findAllFurssService.execute();

    return response.json(classToPlain(furs));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { furDescription } = request.body;

    const furCreate = container.resolve(CreateFursService);

    const animal = await furCreate.execute({
      furDescription,
    });

    return response.json(classToPlain(animal));
  }
}
