import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePartnersTable1604015315121 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'par_partners',
        columns: [
          {
            name: 'parID',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'parName',
            type: 'varchar',
          },
          {
            name: 'parCNPJ',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'parPicture',
            type: 'varchar',
          },
          {
            name: 'parCEP',
            type: 'varchar',
          },
          {
            name: 'parStreet',
            type: 'varchar',
          },
          {
            name: 'parDistrict',
            type: 'varchar',
          },
          {
            name: 'parCity',
            type: 'varchar',
          },
          {
            name: 'parState',
            type: 'varchar',
          },
          {
            name: 'parDateCreated',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'parDateUpdated',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('par_partners');
  }
}
