import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterPartnersTable1605220627117 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'par_partners',
      new TableColumn({
        name: 'parLongitude',
        type: 'varchar',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'par_partners',
      new TableColumn({
        name: 'parLatitude',
        type: 'varchar',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'par_partners',
      new TableColumn({
        name: 'parStatus',
        type: 'tinyint',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('par_partners', 'parLongitude');
    await queryRunner.dropColumn('par_partners', 'parLatitude');
    await queryRunner.dropColumn('par_partners', 'parStatus');

  }
}
