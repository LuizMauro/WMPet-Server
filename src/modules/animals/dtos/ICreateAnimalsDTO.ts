import User from '@modules/users/infra/typeorm/entities/User';

export default interface ICreateAnimalsDTO {
  aniName: string;
  userID: User;
  aniGenre: string;
  aniSize: string;
  aniSpecies: boolean;
  aniDescription: string;
}
