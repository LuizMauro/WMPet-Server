import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';
import CreatePartnersService from '@modules/partners/services/CreatePartnersService';
import FindAllPartnersService from '@modules/partners/services/FindAllService';

export default class PartnerController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findAllPartnersService = container.resolve(FindAllPartnersService);
    const partner = await findAllPartnersService.execute();

    return response.json(classToPlain(partner));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      parName,
      parCNPJ,
      parPicture,
      parCEP,
      parStreet,
      parDistrict,
      parCity,
      parState,
      parLongitude,
      parLatitude,
      parStatus,
      parDescription,
      parWhatsapp,
    } = request.body;

    const createPartners = container.resolve(CreatePartnersService);

    const partners = await createPartners.execute({
      parCEP,
      parCNPJ,
      parStreet,
      parState,
      parPicture,
      parName,
      parDistrict,
      parCity,
      parLatitude,
      parLongitude,
      parStatus,
      parDescription,
      parWhatsapp,
    });

    return response.json(classToPlain(partners));
  }
}
