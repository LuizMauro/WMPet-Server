import User from '@modules/users/infra/typeorm/entities/User';
import Color from '@modules/colors/infra/typeorm/entities/Colors';

export default interface ICreateAnimalsDTO {
  aniName: string;
  userID: User;
  aniGenre: string;
  aniSize: string;
  aniSpecies: boolean;
  aniDescription: string;
  colID: Color;
}
