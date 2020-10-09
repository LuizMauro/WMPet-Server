import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';

import UpdateDeviceIDService from '@modules/users/services/UpdateDeviceIDService';

export default class UpdateDeviceIDController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { useDeviceID } = request.body;
    const { useID } = request.params;
    const updateDeviceIDService = container.resolve(UpdateDeviceIDService);
    const user = await updateDeviceIDService.execute({
      useID,
      useDeviceID,
    });

    return response.json(classToPlain(user));
  }
}
