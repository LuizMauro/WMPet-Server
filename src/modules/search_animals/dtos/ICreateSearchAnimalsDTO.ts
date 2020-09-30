import Animal from '@modules/animals/infra/typeorm/entities/Animals';
import User from '@modules/users/infra/typeorm/entities/User';

export default interface ICreateUserDTO {
  seaLongitude: string;
  seaLatitude: string;
  seaStatus: boolean;
  seaDescription: string;
  seaReward: string;
  aniID: Animal;
  useID: User;
  seaEventDate: Date;
}
