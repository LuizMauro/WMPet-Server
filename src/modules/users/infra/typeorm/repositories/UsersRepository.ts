import { getRepository, Repository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findAll(): Promise<User[] | []> {
    const users = await this.ormRepository.find();

    return users || [];
  }

  public async findByRange(lng: number, lat: number): Promise<User[] | []> {
    // lat = -22.8476202;
    // lng = -45.3218702;

    const users = await this.ormRepository
      .createQueryBuilder('use_users')
      .addSelect('use_users.*')
      .addSelect(
        `( 6371 * acos( cos( radians(${lat}) ) * cos( radians( useLatitude ) ) * cos( radians( useLongitude ) - radians(${lng}) ) + sin( radians(${lat}) ) * sin( radians( useLatitude ) ) ) )`,
        'distance',
      )
      .having('distance <= 3')
      .orderBy('useDateCreated')
      .getMany();

    return users || [];
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { useID: id } });

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { useEmail: email },
    });

    return user;
  }

  public async create({
    useEmail,
    useName,
    usePasswordHash,
  }: // useDeviceID,
  // useLatitude,
  // useLongitude,
  ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      useEmail,
      useName,
      usePasswordHash,
      // useDeviceID,
      // useLatitude,
      // useLongitude,
    });

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;
