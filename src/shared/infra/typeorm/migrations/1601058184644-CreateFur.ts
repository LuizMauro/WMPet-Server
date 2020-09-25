import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateFur1601058184644 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'fur_furs',
        columns: [
          {
            name: 'furID',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'furDescription',
            type: 'varchar',
          },
          {
            name: 'furDateCreated',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'furDateUpdated',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('fur_furs');
  }
}
