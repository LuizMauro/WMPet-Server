import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';

import UpdateCoordinatesService from '@modules/users/services/UpdateCoordinatesService';

export default class UpdateCoordinatesController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { useLongitude, useLatitude } = request.body;
    const { useID } = request.params;
    const updateCoordinatesService = container.resolve(
      UpdateCoordinatesService,
    );
    const user = await updateCoordinatesService.execute({
      useID,
      useLongitude,
      useLatitude,
    });

    return response.json(classToPlain(user));
  }
}
