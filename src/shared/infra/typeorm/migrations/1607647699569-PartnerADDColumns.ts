import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class PartnerADDColumns1607647699569 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'par_partners',
      new TableColumn({
        name: 'parDescription',
        type: 'varchar',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'par_partners',
      new TableColumn({
        name: 'parWhatsapp',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('par_partners', 'parDescription');
    await queryRunner.dropColumn('par_partners', 'parWhatsapp');
  }
}
