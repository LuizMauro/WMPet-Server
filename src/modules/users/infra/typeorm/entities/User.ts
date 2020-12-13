import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import Contacts from '@modules/contacts/infra/typeorm/entities/Contacts';

@Entity('use_users')
class User {
  @PrimaryGeneratedColumn('uuid')
  useID: string;

  @Column()
  useName: string;

  @Column()
  useEmail: string;

  @Column()
  useLongitude: string;

  @Column()
  useLatitude: string;

  @Column()
  useDeviceID: string;

  @Column()
  usePhoto: string;

  @OneToMany(() => Contacts, contact => contact.useID)
  contacts: Contacts[];

  @Exclude()
  @Column()
  usePasswordHash: string;

  @CreateDateColumn()
  useDateCreated: Date;

  @UpdateDateColumn()
  useDateUpdated: Date;
}

export default User;
