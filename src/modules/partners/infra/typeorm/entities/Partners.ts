import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('par_partners')
class Partners {
  @PrimaryGeneratedColumn('uuid')
  parID: string;

  @Column()
  parName: string;

  @Column()
  parCNPJ: string;

  @Column()
  parPicture: string;

  @Column()
  parCEP: string;

  @Column()
  parStreet: string;

  @Column()
  parDistrict: string;

  @Column()
  parCity: string;

  @Column()
  parState: string;

  @Column()
  parLongitude: string;

  @Column()
  parLatitude: string;

  @Column()
  parStatus: number;

  @Column()
  parDescription: string;

  @Column()
  parWhatsapp: string;

  @CreateDateColumn()
  parDateCreated: Date;

  @UpdateDateColumn()
  parDateUpdated: Date;
}

export default Partners;
