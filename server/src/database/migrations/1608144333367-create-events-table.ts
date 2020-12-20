import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createEventsTable1608144333367 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'events',
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
            type: 'varchar(100)',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'descriptionHTML',
            type: 'text',
          },
          {
            name: 'placeId',
            type: 'int',
          },
          {
            name: 'date',
            type: 'timestamp',
          },
          {
            name: 'imageUrl',
            type: 'text',
          },
          {
            name: 'price',
            type: 'real',
          },
          {
            name: 'promoter',
            type: 'varchar(100)',
          },
          {
            name: 'hot',
            type: 'boolean',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('events');
  }
}
