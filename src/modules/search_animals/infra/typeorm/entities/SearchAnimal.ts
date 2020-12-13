import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import Animal from '@modules/animals/infra/typeorm/entities/Animals';
import Pictures from '@modules/pictures/infra/typeorm/entities/Pictures';

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

  @OneToMany(() => Pictures, pic => pic.aniID)
  photos: Pictures[];

  @CreateDateColumn()
  seaDateCreated: Date;

  @UpdateDateColumn()
  seaDateUpdated: Date;
}

export default SearchAnimals;
