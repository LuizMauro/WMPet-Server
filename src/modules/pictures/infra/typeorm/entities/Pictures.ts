import Animals from '@modules/animals/infra/typeorm/entities/Animals';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('pic_pictures')
class Pictures {
  @PrimaryGeneratedColumn('uuid')
  picID: string;

  @Column()
  picPath: string;

  @Column()
  picStatus: boolean;

  @Column()
  picPrimary: boolean;


  @ManyToOne(() => Animals, { eager: true })
  @JoinColumn({ name: 'aniID' })
  aniID: Animals;

  @CreateDateColumn()
  picDateCreated: Date;

  @UpdateDateColumn()
  picDateUpdated: Date;
}

export default Pictures;
