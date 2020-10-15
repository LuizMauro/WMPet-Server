import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';

import FindByUserIDService from '@modules/contacts/services/FindByUserIDService';

export default class ContactsUserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findByUserService = container.resolve(FindByUserIDService);
    const {id} = request.params;
    const contact = await findByUserService.execute({useID : id});

    return response.json(classToPlain(contact));
  }

}
