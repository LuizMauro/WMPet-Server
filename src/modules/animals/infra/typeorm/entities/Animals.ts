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
import Fur from '@modules/furs/infra/typeorm/entities/Furs';

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

  @ManyToOne(() => Fur, { eager: true })
  @JoinColumn({ name: 'furID' })
  furID: Fur;

  @CreateDateColumn()
  aniDateCreated: Date;

  @UpdateDateColumn()
  aniDateUpdated: Date;
}

export default Animals;
