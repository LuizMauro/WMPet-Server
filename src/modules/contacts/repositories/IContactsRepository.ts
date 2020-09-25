import Contact from '../infra/typeorm/entities/Contacts';
import ICreateContactsDTO from '../dtos/ICreateContactsDTO';

export default interface IContactsRepository {
  findById(id: string): Promise<Contact | undefined>;
  create(data: ICreateContactsDTO): Promise<Contact>;
  save(contact: Contact): Promise<Contact>;
}
