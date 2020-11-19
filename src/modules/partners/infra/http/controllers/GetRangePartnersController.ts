import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';

import FindAllRangePartners from '@modules/partners/services/FindRangeService';

export default class GetRangePartnersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { lng, lat } = request.params;
    const findAllRangePartnersService = container.resolve(FindAllRangePartners);

    const partners = await findAllRangePartnersService.execute(lng, lat);

    return response.json(classToPlain(partners));
  }
}
