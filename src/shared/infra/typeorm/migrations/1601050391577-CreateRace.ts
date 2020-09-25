import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateRace1601050391577 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'rac_race',
        columns: [
          {
            name: 'racID',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'racDescription',
            type: 'varchar',
          },
          {
            name: 'ractType',
            type: 'boolean',
          },
          {
            name: 'racDateCreated',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'racDateUpdated',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('rac_Race');
  }
}
