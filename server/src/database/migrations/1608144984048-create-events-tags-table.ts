import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class createEventsTagsTable1608144984048 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'events_tags',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'tagId',
            type: 'int',
          },
          {
            name: 'eventId',
            type: 'int',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'events_tags',
      new TableForeignKey({
        columnNames: ['eventId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'events',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'events_tags',
      new TableForeignKey({
        columnNames: ['tagId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'event_tags',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('events_tags');
    const eventForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('eventId') !== -1);
    const tagForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('tagId') !== -1);
    await queryRunner.dropForeignKey('events_tags', eventForeignKey);
    await queryRunner.dropForeignKey('events_tags', tagForeignKey);

    await queryRunner.dropTable('events_tags');
  }
}
