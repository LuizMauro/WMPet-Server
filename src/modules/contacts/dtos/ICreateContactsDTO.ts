import User from '@modules/users/infra/typeorm/entities/User';


export default interface ICreateContactsDTO {
  conDescription: string;
  conType: boolean;
  useID: User;
}
