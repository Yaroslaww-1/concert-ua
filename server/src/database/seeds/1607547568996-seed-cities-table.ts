import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class seedCitiesTable1607547568996 implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection.query('TRUNCATE TABLE cities CASCADE;');
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
    await connection
      .createQueryBuilder()
      .insert()
      .into('cities')
      .values(cities)
      .execute();
  }
}
