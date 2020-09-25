import User from '@modules/users/infra/typeorm/entities/User';
import Color from '@modules/colors/infra/typeorm/entities/Colors';
import Race from '@modules/races/infra/typeorm/entities/Race';
import Fur from '@modules/furs/infra/typeorm/entities/Furs';

export default interface ICreateAnimalsDTO {
  aniName: string;
  userID: User;
  aniGenre: string;
  aniSize: string;
  aniSpecies: boolean;
  aniDescription: string;
  colID: Color;
  racID: Race;
  furID: Fur;
}
