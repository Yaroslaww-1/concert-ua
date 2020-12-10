import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class createArtistImagesTable1607630697466 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ArtistImages',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'url',
            type: 'varchar(200)',
          },
          {
            name: 'artistId',
            type: 'int',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'ArtistImages',
      new TableForeignKey({
        columnNames: ['artistId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'artists',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('ArtistImages');
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('artistId') !== -1);
    await queryRunner.dropForeignKey('ArtistImages', foreignKey);

    await queryRunner.dropTable('ArtistImages');
  }
}
