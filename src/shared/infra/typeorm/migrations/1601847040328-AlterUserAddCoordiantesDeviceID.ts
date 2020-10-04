import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterUserAddCoordiantesDeviceID1601847040328
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'use_users',
      new TableColumn({
        name: 'useLongitude',
        type: 'varchar',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'use_users',
      new TableColumn({
        name: 'useLatitude',
        type: 'varchar',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'use_users',
      new TableColumn({
        name: 'useDeviceID',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('use_users', 'useLongitude');
    await queryRunner.dropColumn('use_users', 'useLatitude');
    await queryRunner.dropColumn('use_users', 'useDeviceID');
  }
}
