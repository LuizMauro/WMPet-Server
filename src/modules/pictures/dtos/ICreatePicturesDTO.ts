import Animals from '@modules/animals/infra/typeorm/entities/Animals';


export default interface ICreatePicturesDTO {
  picPath: string;
  picStatus: boolean;
  picPrimary: boolean;
  aniID: Animals;
}
