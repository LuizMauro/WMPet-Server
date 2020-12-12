import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';
import FindByUserIDService from '@modules/addresses/services/FindByUserIDService';

export default class UserAddressesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findByUserService = container.resolve(FindByUserIDService);
    const {id} = request.params;
    const addresses = await findByUserService.execute({useID : id});

    return response.json(classToPlain(addresses));
  }

}
