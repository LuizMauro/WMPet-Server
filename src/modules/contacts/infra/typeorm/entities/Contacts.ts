import User from '@modules/users/infra/typeorm/entities/User';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('con_contacts')
class Contacts {
  @PrimaryGeneratedColumn('uuid')
  conID: string;

  @Column()
  conDescription: string;

  @Column()
  conType: boolean;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'useID' })
  useID: User;

  @CreateDateColumn()
  conDateCreated: Date;

  @UpdateDateColumn()
  conDateUpdated: Date;
}

export default Contacts;
