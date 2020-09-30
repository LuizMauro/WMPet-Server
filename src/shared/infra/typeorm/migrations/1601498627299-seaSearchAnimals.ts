import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class seaSearchAnimals1601498627299
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sea_search_animals',
        columns: [
          {
            name: 'seaID',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'seaLongitude',
            type: 'varchar',
          },
          {
            name: 'seaLatitude',
            type: 'varchar',
          },
          {
            name: 'seaStatus',
            type: 'boolean',
          },
          {
            name: 'seaDescription',
            type: 'varchar',
          },
          {
            name: 'seaReward',
            type: 'varchar',
          },
          {
            name: 'aniID',
            type: 'varchar',
          },
          {
            name: 'useID',
            type: 'varchar',
          },
          {
            name: 'seaEventDate',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'seaDateCreated',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'seaDateUpdated',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'ForeignSeaAnimal',
            columnNames: ['aniID'],
            referencedTableName: 'ani_animals',
            referencedColumnNames: ['aniID'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'ForeignSeaUser',
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
    await queryRunner.dropTable('sea_search_animals');
  }
}
