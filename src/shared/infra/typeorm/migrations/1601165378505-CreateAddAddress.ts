import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAddAddress1601165378505 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'add_address',
        columns: [
          {
            name: 'addID',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'addCEP',
            type: 'varchar',
          },
          {
            name: 'addStreet',
            type: 'varchar',
          },
          {
            name: 'addDistrict',
            type: 'varchar',
          },
          {
            name: 'addCity',
            type: 'varchar',
          },
          {
            name: 'addState',
            type: 'varchar',
          },
          {
            name: 'useID',
            type: 'varchar',
          },
          {
            name: 'addDateCreated',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'addDateUpdated',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'ForeignUserAddress',
            columnNames: ['useID'],
            referencedTableName: 'use_users',
            referencedColumnNames: ['useID'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('add_address');
  }
}
