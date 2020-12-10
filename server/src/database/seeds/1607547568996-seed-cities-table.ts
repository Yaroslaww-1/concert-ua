import { MigrationInterface, QueryRunner } from 'typeorm';

export class seedCitiesTable1607547568996 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const cities = [
      'Kyiv',
      'Odesa',
      'Dnipro',
      'Lviv',
      'Kharkiv',
      'Bila Tserkva',
      'Boryspil',
      'Brovary',
      'Bukovel',
      'Cherkasy',
      'Chernigiv',
      'Chernivtsi',
      'Fastiv',
      'Ivano-Frankivsk',
      'Kherson',
      'Khmelnytskyi',
      'Kovel',
      'Kramatorsk',
      'Kremenchuk',
      'Kropivnitsky',
      'Kryvyi Rig',
      'Lutsk',
      'Mariupol',
      'Mukachevo',
      'Mykolayiv',
      'Poltava',
      'Pryluky',
      'Rivne',
      'Severodonetsk',
      'Sumy',
      'Ternopil',
      'Truskavets',
      'Uzhhorod',
      'Vinnytsia',
      'Zaporizhia',
      'Zhytomyr',
    ].map(cityName => ({ name: cityName }));
    queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('cities')
      .values(cities)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.clearTable('cities');
  }
}
