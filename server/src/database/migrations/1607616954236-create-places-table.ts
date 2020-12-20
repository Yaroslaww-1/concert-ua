import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class createPlacesTable1607616954236 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'places',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar(200)',
          },
          {
            name: 'address',
            type: 'varchar(200)',
          },
          {
            name: 'cityId',
            type: 'int',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'places',
      new TableForeignKey({
        columnNames: ['cityId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cities',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('places');
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('cityId') !== -1);
    await queryRunner.dropForeignKey('places', foreignKey);

    await queryRunner.dropTable('places');
  }
}
