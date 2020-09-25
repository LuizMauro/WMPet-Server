import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateContacts1601050579871 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'con_contacts',
              columns: [
                {
                  name: 'conID',
                  type: 'varchar',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                },
                {
                  name: 'conDescription',
                  type: 'varchar',
                },
                {
                  name: 'conType',
                  type: 'boolean',
                },
                {
                  name: 'useID',
                  type: 'varchar',
                },
                {
                  name: 'conDateCreated',
                  type: 'timestamp',
                  default: 'now()',
                },
                {
                  name: 'conDateUpdated',
                  type: 'timestamp',
                  default: 'now()',
                },
              ],
              foreignKeys: [
                {
                  name: 'ForeignUserContact',
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
    }

}
