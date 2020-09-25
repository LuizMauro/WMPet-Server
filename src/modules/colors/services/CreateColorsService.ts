import { injectable, inject } from 'tsyringe';

import IColorsRepository from '@modules/colors/repositories/IColorsRepository';

import Colors from '../infra/typeorm/entities/Colors';

interface IRequest {
  colDescription: string;
}

@injectable()
class CreateColorsService {
  constructor(
    @inject('ColorsRepository')
    private ColorsRepository: IColorsRepository,

  ) {}

  public async execute({
    colDescription
  }: IRequest): Promise<Colors> {
    
   
    const color = await this.ColorsRepository.create({
      colDescription,
    });

    return color;
  }
}

export default CreateColorsService;
