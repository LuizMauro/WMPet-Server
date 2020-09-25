import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('ani_animals')
class Animals {
  @PrimaryGeneratedColumn('uuid')
  aniID: string;

  @Column()
  aniName: string;

  @Column()
  aniGenre: string;

  @Column()
  aniSize: string;

  @Column()
  aniSpecies: boolean;

  @Column()
  aniDescription: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'userID' })
  userID: User;

  @CreateDateColumn()
  aniDateCreated: Date;

  @UpdateDateColumn()
  aniDateUpdated: Date;
}

export default Animals;
