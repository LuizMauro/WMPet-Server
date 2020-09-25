import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AlterAnimalsAddFur1601058630809
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'ani_animals',
      new TableColumn({
        name: 'furID',
        type: 'varchar',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'ani_animals',
      new TableForeignKey({
        name: 'AnimalFur',
        columnNames: ['furID'],
        referencedColumnNames: ['furID'],
        referencedTableName: 'fur_furs',
        onDelete: 'CASCADE  ',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('ani_animals', 'AnimalFur');
    await queryRunner.dropColumn('ani_animals', 'furID');
  }
}
