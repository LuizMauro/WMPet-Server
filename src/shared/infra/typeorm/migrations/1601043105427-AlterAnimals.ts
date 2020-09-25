import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AlterAnimals1601043105427 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'ani_animals',
      new TableColumn({
        name: 'colID',
        type: 'varchar',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'ani_animals',
      new TableForeignKey({
        name: 'AnimalColor',
        columnNames: ['colID'],
        referencedColumnNames: ['colID'],
        referencedTableName: 'col_colors',
        onDelete: 'CASCADE  ',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('ani_animals', 'AnimalColor');
    await queryRunner.dropColumn('ani_animals', 'colID');
  }
}
