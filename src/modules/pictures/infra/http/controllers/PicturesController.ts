import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';
import CreatePicturesService from '@modules/pictures/services/CreatePicturesService';
import FindAllPicturesService from '@modules/pictures/services/FindAllService';

export default class PicturesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { picPath, picStatus, picPrimary, aniID } = request.body;

    const createPictures = container.resolve(CreatePicturesService);

    const pictures = await createPictures.execute({
      picPath,
      picStatus,
      picPrimary,
      aniID,
    });

    return response.json(classToPlain(pictures));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const findAllPicturesService = container.resolve(FindAllPicturesService);
    const pictures = await findAllPicturesService.execute();

    return response.json(classToPlain(pictures));
  } 

}
