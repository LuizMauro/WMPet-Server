import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('ani_animals')
class Animals {
  @PrimaryGeneratedColumn('uuid')
  aniID: string;

  @Column()
  name: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'userID' })
  userID: User;
}

export default Animals;
