import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import Animal from '@modules/animals/infra/typeorm/entities/Animals';

@Entity('sea_search_animals')
class SearchAnimals {
  @PrimaryGeneratedColumn('uuid')
  seaID: string;

  @Column()
  seaLongitude: string;

  @Column()
  seaLatitude: string;

  @Column()
  seaStatus: boolean;

  @Column()
  seaDescription: string;

  @Column()
  seaEventDate: Date;

  @Column()
  seaReward: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'useID' })
  useID: User;

  @ManyToOne(() => Animal, { eager: true })
  @JoinColumn({ name: 'aniID' })
  aniID: Animal;

  @CreateDateColumn()
  seaDateCreated: Date;

  @UpdateDateColumn()
  seaDateUpdated: Date;
}

export default SearchAnimals;
