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
