import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

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

  @Exclude()
  @Column()
  usePasswordHash: string;

  @CreateDateColumn()
  useDateCreated: Date;

  @UpdateDateColumn()
  useDateUpdated: Date;
}

export default User;
