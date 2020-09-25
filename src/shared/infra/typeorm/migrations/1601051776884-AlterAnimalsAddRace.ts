import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AlterAnimalsAddRace1601051776884
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'ani_animals',
      new TableColumn({
        name: 'racID',
        type: 'varchar',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'ani_animals',
      new TableForeignKey({
        name: 'AnimalRace',
        columnNames: ['racID'],
        referencedColumnNames: ['racID'],
        referencedTableName: 'rac_races',
        onDelete: 'CASCADE  ',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('ani_animals', 'AnimalRace');
    await queryRunner.dropColumn('ani_animals', 'racID');
  }
}
