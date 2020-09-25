import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateColors1601041278634 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'col_colors',
        columns: [
          {
            name: 'colID',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'colDescription',
            type: 'varchar',
          },

          {
            name: 'colDateCreated',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'colDateUpdated',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('col_colors');
  }
}
