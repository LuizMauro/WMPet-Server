import { injectable, inject } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

interface IRequestDTO {
  avatarFilename: string;
}

@injectable()
export default class UpdateUserAvatarService {
  constructor(
    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ avatarFilename }: IRequestDTO): Promise<string> {
    const filename = await this.storageProvider.saveFile(avatarFilename);

    return filename;
  }
}
