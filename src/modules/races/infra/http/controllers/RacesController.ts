import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';
import CreateRacesService from '@modules/races/services/CreateRacesService';

export default class RacesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { racDescription, racType } = request.body;

    const createRaces = container.resolve(CreateRacesService);

    const color = await createRaces.execute({
      racDescription,
      racType,
    });

    return response.json(classToPlain(color));
  }
}
