import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAnimalPicture1601503585486 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pic_pictures',
        columns: [
          {
            name: 'picID',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'picPath',
            type: 'varchar',
          },
          {
            name: 'picStatus',
            type: 'boolean',
          },
          {
            name: 'picPrimary',
            type: 'boolean',
          },
          {
            name: 'aniID',
            type: 'varchar',
          },
          {
            name: 'picDateCreated',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'picDateUpdated',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'ForeignAnimalPicture',
            columnNames: ['aniID'],
            referencedTableName: 'ani_animals',
            referencedColumnNames: ['aniID'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pic_pictures');
  }
}
