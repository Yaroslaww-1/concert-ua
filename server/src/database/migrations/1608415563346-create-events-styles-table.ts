import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class createEventsStylesTable1608415563346 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'events_styles',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'eventId',
            type: 'int',
          },
          {
            name: 'styleId',
            type: 'int',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'events_styles',
      new TableForeignKey({
        columnNames: ['eventId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'events',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'events_styles',
      new TableForeignKey({
        columnNames: ['styleId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'styles',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('events_styles');
    const eventForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('eventId') !== -1);
    const styleForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('styleId') !== -1);
    await queryRunner.dropForeignKey('events_styles', eventForeignKey);
    await queryRunner.dropForeignKey('events_styles', styleForeignKey);

    await queryRunner.dropTable('events_styles');
  }
}
