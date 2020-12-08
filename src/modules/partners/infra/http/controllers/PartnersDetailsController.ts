import { Request, Response } from 'express';
import { classToPlain } from 'class-transformer';
import PartnersRepository from '../../typeorm/repositories/PartnersRepository';

export default class PartnerController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const partnersRepository = new PartnersRepository();
    const partner = await partnersRepository.findById(id);

    return response.json(classToPlain(partner));
  }
}
