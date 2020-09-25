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
import Color from '@modules/colors/infra/typeorm/entities/Colors';
import Race from '@modules/races/infra/typeorm/entities/Race';

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

  @ManyToOne(() => Color, { eager: true })
  @JoinColumn({ name: 'colID' })
  colID: Color;

  @ManyToOne(() => Race, { eager: true })
  @JoinColumn({ name: 'racID' })
  racID: Race;

  @CreateDateColumn()
  aniDateCreated: Date;

  @UpdateDateColumn()
  aniDateUpdated: Date;
}

export default Animals;
