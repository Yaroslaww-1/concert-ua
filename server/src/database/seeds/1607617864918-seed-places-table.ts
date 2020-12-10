import { MigrationInterface, QueryRunner } from 'typeorm';

export class seedPlacesTable1607617864918 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const cities = await queryRunner.manager
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
    queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('places')
      .values(places)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.clearTable('places');
  }
}
