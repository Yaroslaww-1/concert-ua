import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class addArtistToEvent1608325485793 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'events',
      new TableColumn({
        name: 'artistId',
        type: 'int',
      }),
    );

    await queryRunner.createForeignKey(
      'events',
      new TableForeignKey({
        columnNames: ['artistId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'artists',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('events');
    const artistForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('artistId') !== -1);
    await queryRunner.dropForeignKey('events', artistForeignKey);

    await queryRunner.dropTable('events');
  }
}
