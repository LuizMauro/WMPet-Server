import { getRepository, Repository } from 'typeorm';

import IContactsRepository from '@modules/contacts/repositories/IContactsRepository';
import ICreateContactsDTO from '@modules/contacts/dtos/ICreateContactsDTO';

import Contacts from '../entities/Contacts';

class ContactsRepository implements IContactsRepository {
  private ormRepository: Repository<Contacts>;

  constructor() {
    this.ormRepository = getRepository(Contacts);
  }

  public async findById(id: string): Promise<Contacts | undefined> {
    const contact = await this.ormRepository.findOne({ where: { conID: id } });

    return contact;
  }

  public async create({ 
    conDescription,
    conType,
    useID, 
  }: ICreateContactsDTO): Promise<Contacts> {
    const contact = this.ormRepository.create({
      conDescription,
      conType,
      useID,
    });

    await this.ormRepository.save(contact);

    return contact;
  }

  public async save(contact: Contacts): Promise<Contacts> {
    return this.ormRepository.save(contact);
  }
}

export default ContactsRepository;
