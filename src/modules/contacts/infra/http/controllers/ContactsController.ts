import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';
import CreateContactsService from '@modules/contacts/services/CreateContactsService';
import User from '@modules/users/infra/typeorm/entities/User';

export default class ContactsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
     conDescription,
     conType,
    } = request.body;

    const createContacts = container.resolve(CreateContactsService);

    const contacts = await createContacts.execute({
      conDescription,
      conType,
      useID: request.user.useID,
    });

    return response.json(classToPlain(contacts));
  }
}
