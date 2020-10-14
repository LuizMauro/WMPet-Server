import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterUserAddPhoto1602712893161
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'use_users',
      new TableColumn({
        name: 'usePhoto',
        type: 'varchar',
        isNullable: false,
        default: '"user-default.png"',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('use_users', 'usePhoto');
  }
}
