import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';
import CreateContactsService from '@modules/contacts/services/CreateContactsService';

export default class ContactsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { conDescription, conType, useID } = request.body;

    const createContacts = container.resolve(CreateContactsService);

    const contacts = await createContacts.execute({
      conDescription,
      conType,
      useID,
    });

    return response.json(classToPlain(contacts));
  }
}
