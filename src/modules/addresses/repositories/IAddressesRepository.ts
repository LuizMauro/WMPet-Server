import Address from '../infra/typeorm/entities/Addresses';
import ICreateAddressDTO from '../dtos/ICreateAddressDTO';

export default interface IAddressesRepository {
  findAll(): Promise<Address[] | []>;
  create(data: ICreateAddressDTO): Promise<Address>;
  save(address: Address): Promise<Address>;
  findByUser(useID: string): Promise<Address[] | []>;
}
