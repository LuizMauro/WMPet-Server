import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('rac_races')
class Race {
  @PrimaryGeneratedColumn('uuid')
  racID: string;

  @Column()
  racDescription: string;

  @Column()
  racType: boolean;

  @CreateDateColumn()
  racDateCreated: Date;

  @UpdateDateColumn()
  racDateUpdated: Date;
}

export default Race;
