import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class addPlaceReferenceToEvent1608415385167 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'events',
      new TableForeignKey({
        columnNames: ['placeId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'places',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('events');
    const artistForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('placeId') !== -1);
    await queryRunner.dropForeignKey('events', artistForeignKey);

    await queryRunner.dropTable('events');
  }
}
