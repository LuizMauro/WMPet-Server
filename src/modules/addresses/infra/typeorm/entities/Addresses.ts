import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('add_address')
class Address {
  @PrimaryGeneratedColumn('uuid')
  addID: string;

  @Column()
  addCEP: string;

  @Column()
  addStreet: string;

  @Column()
  addDistrict: string;

  @Column()
  addCity: string;

  @Column()
  addState: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'useID' })
  useID: User;

  @CreateDateColumn()
  addDateCreated: Date;

  @UpdateDateColumn()
  addDateUpdated: Date;
}

export default Address;
