import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class createArtistsImagesTable1607630697466 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ArtistsImages',
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
            name: 'isMain',
            type: 'bool',
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
      'ArtistsImages',
      new TableForeignKey({
        columnNames: ['artistId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'artists',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('ArtistsImages');
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('artistId') !== -1);
    await queryRunner.dropForeignKey('ArtistsImages', foreignKey);

    await queryRunner.dropTable('ArtistsImages');
  }
}
