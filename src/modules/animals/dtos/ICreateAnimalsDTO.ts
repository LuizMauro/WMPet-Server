import User from '@modules/users/infra/typeorm/entities/User';
import Color from '@modules/colors/infra/typeorm/entities/Colors';
import Race from '@modules/races/infra/typeorm/entities/Race';

export default interface ICreateAnimalsDTO {
  aniName: string;
  userID: User;
  aniGenre: string;
  aniSize: string;
  aniSpecies: boolean;
  aniDescription: string;
  colID: Color;
  racID: Race;
}
