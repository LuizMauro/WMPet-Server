import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';

import CreateUserService from '@modules/users/services/CreateUserService';
import FindAllUsersService from '@modules/users/services/FindAllService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findAllUsersService = container.resolve(FindAllUsersService);
    const users = await findAllUsersService.execute();

    return response.json(classToPlain(users));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      useName,
      useEmail,
      usePassword,
      conDescription,
      conType,
    } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      useName,
      useEmail,
      usePasswordHash: usePassword,
      conDescription,
      conType,
    });

    return response.json(classToPlain(user));
  }
}
