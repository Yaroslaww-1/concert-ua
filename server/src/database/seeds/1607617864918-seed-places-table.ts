import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class seedPlacesTable1607617864918 implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection.query('TRUNCATE TABLE places CASCADE;');
    const cities = await connection
      .createQueryBuilder()
      .select()
      .from('cities', 'cities')
      .limit(10)
      .execute();
    const places = [
      'Atlas',
      'Art Club Cow',
      'Bel etage',
      'CARRIBEAN club',
      'National Palace of Arts "Ukraine',
      'Odessa Academic Theatre of Musical Comedy',
      'D12',
      'Odessa Regional Philharmonic',
      '!FESTrepublic',
      'UBK',
      'Art-zavod Platforma',
    ].map(placeName => ({
      name: placeName,
      address: 'Some address',
      city: cities[Math.floor(Math.random() * cities.length)],
    }));
    await connection
      .createQueryBuilder()
      .insert()
      .into('places')
      .values(places)
      .execute();
  }
}
