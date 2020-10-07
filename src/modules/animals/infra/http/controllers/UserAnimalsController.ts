import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';
import CreateAnimalsService from '@modules/animals/services/CreateAnimalsService';
import FindByUserIDService from '@modules/animals/services/FindByUserIDService';

export default class AnimalsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findByUserService = container.resolve(FindByUserIDService);
    const {id} = request.params;
    const animals = await findByUserService.execute({useID : id});

    return response.json(classToPlain(animals));
  }

}
