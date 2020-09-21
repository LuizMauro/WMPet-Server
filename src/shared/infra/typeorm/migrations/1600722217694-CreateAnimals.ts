import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAnimals1600722217694 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ani_animals',
        columns: [
          {
            name: 'aniID',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'userID',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'ForeignUser',
            columnNames: ['userID'],
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
    await queryRunner.dropTable('ani_animals');
  }
}
