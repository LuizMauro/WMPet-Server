import User from '@modules/users/infra/typeorm/entities/User';

export default interface ICreateAddressDTO {
  addCEP: string;
  addStreet: string;
  addDistrict: string;
  addCity: string;
  addState: string;
  useID: User;
}
