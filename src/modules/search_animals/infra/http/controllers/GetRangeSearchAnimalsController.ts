import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';

import FindAllRangeSearchAnimalsService from '@modules/search_animals/services/FindRangeService';

export default class GetRangeSearchAnimalsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { lng, lat } = request.body;
    const findAllRangeSearchAnimalsService = container.resolve(
      FindAllRangeSearchAnimalsService,
    );
    const searchAnimals = await findAllRangeSearchAnimalsService.execute(
      lng,
      lat,
    );

    return response.json(classToPlain(searchAnimals));
  }
}
