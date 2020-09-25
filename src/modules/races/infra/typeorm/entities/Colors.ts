import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('col_colors')
class Colors {
  @PrimaryGeneratedColumn('uuid')
  colID: string;

  @Column()
  colDescription: string;

  @CreateDateColumn()
  colDateCreated: Date;

  @UpdateDateColumn()
  colDateUpdated: Date;
}

export default Colors;
