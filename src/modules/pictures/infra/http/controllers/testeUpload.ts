import { Request, Response } from 'express';
import { container } from 'tsyringe';

import TestUpload from '@modules/pictures/services/TestUpload';
import { classToClass } from 'class-transformer';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const testUpload = container.resolve(TestUpload);

    const photo = await testUpload.execute({
      avatarFilename: request.file.filename,
    });

    return response.json(
      classToClass(
        `https://wpet-images-facul.s3-sa-east-1.amazonaws.com/${photo}`,
      ),
    );
  }
}
