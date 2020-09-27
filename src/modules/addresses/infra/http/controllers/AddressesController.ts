import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToPlain } from 'class-transformer';
import CreateAddressesService from '@modules/addresses/services/CreateAddressesService';
import FindAllAddressesService from '@modules/addresses/services/FindAllService';

export default class AddressesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findAllAddressesService = container.resolve(FindAllAddressesService);
    const addresses = await findAllAddressesService.execute();

    return response.json(classToPlain(addresses));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { addCEP, addStreet, addDistrict, addCity, addState } = request.body;

    const createAddresses = container.resolve(CreateAddressesService);

    const address = await createAddresses.execute({
      addCEP,
      addStreet,
      addDistrict,
      addCity,
      addState,
      useID: request.user.useID,
    });

    return response.json(classToPlain(address));
  }
}
