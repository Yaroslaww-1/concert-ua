import { MigrationInterface, QueryRunner } from 'typeorm';

export class seedCitiesTable1607547568996 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const cities = [
      {
        name: 'Kyiv',
      },
      {
        name: 'Lviv',
      },
      {
        name: 'Odessa',
      },
      {
        name: 'Mykolaiv',
      },
      {
        name: 'Dnipro',
      },
      {
        name: 'Kharkiv',
      },
    ];
    queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('cities')
      .values(cities)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
