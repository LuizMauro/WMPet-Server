import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';
import CreateColorsService from '@modules/colors/services/CreateColorsService';

export default class ColorsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
     colDescription
    } = request.body;

    const createColors = container.resolve(CreateColorsService);

    const color = await createColors.execute({
      colDescription,
    });

    return response.json(classToPlain(color));
  }
}
