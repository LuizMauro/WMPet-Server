import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('fur_furs')
class Furs {
  @PrimaryGeneratedColumn('uuid')
  furID: string;

  @Column()
  furDescription: string;

  @CreateDateColumn()
  furDateCreated: Date;

  @UpdateDateColumn()
  furDateUpdated: Date;
}

export default Furs;
