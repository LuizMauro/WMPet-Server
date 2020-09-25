import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';
import CreateColorsService from '@modules/colors/services/CreateColorsService';
import FindAllColorsService from '@modules/colors/services/FindAllService';

export default class ColorsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findAllColorsService = container.resolve(FindAllColorsService);
    const colors = await findAllColorsService.execute();

    return response.json(classToPlain(colors));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { colDescription } = request.body;

    const createColors = container.resolve(CreateColorsService);

    const color = await createColors.execute({
      colDescription,
    });

    return response.json(classToPlain(color));
  }
}
