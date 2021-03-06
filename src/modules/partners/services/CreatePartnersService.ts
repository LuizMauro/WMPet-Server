import { injectable, inject } from 'tsyringe';

import IPartnersRepository from '@modules/partners/repositories/IPartnersRepository';

import Partners from '../infra/typeorm/entities/Partners';

interface IRequest {
  parName: string;
  parCNPJ: string;
  parPicture: string;
  parCEP: string;
  parStreet: string;
  parDistrict: string;
  parCity: string;
  parState: string;
  parLongitude: string;
  parLatitude: string;
  parStatus: number;
  parDescription: string;
  parWhatsapp: string;
}

@injectable()
class CreatePartnersService {
  constructor(
    @inject('PartnersRepository')
    private PartnersRepository: IPartnersRepository,
  ) {}

  public async execute({
    parCEP,
    parCNPJ,
    parCity,
    parDistrict,
    parName,
    parPicture,
    parState,
    parStreet,
    parLatitude,
    parLongitude,
    parStatus,
    parDescription,
    parWhatsapp,
  }: IRequest): Promise<Partners> {
    const partners = await this.PartnersRepository.create({
      parCEP,
      parCNPJ,
      parCity,
      parDistrict,
      parName,
      parPicture,
      parState,
      parStreet,
      parLatitude,
      parLongitude,
      parStatus,
      parDescription,
      parWhatsapp,
    });

    return partners;
  }
}

export default CreatePartnersService;
