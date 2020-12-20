import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class createArtistsStylesTable1608481436966 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'artists_styles',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'artistId',
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
      'artists_styles',
      new TableForeignKey({
        columnNames: ['artistId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'artists',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'artists_styles',
      new TableForeignKey({
        columnNames: ['styleId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'styles',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('artists_styles');
    const artistForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('artistId') !== -1);
    const styleForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('styleId') !== -1);
    await queryRunner.dropForeignKey('artists_styles', artistForeignKey);
    await queryRunner.dropForeignKey('artists_styles', styleForeignKey);

    await queryRunner.dropTable('artists_styles');
  }
}
