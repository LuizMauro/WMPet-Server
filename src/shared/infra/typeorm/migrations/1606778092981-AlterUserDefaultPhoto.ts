import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterUserDefaultPhoto1606778092981
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('use_users', 'usePhoto');
    await queryRunner.addColumn(
      'use_users',
      new TableColumn({
        name: 'usePhoto',
        type: 'varchar',
        isNullable: false,
        default:
          '"https://wpet-images-facul.s3-sa-east-1.amazonaws.com/person.png"',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('use_users', 'usePhoto');
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
}
