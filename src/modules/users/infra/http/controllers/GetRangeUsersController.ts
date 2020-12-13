import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';

import FindRangeService from '@modules/users/services/FindRangeService';

import { sendPushNotification } from '@shared/notifications/PushNotifications';

export default class GetRangeSearchAnimalsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { lng, lat } = request.body;
    const findRangeService = container.resolve(FindRangeService);
    const users = await findRangeService.execute(lng, lat);

    const message = 'Ajude a encontrar esse pet!';
    const title = 'Pet perdido :(';
    const data = {
      to: 'AnimalPerdidoNotificacao',
      animalID: '60e48f26-ec65-44b8-aa43-63cd7e0bdcd5',
    };

    sendPushNotification({ users, title, message, data });

    return response.json(classToPlain(users));
  }
}
