import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class seedStylesTable1607622105682 implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection.query('TRUNCATE TABLE styles CASCADE;');
    const styles = [
      'Alternative rock',
      'Ambient',
      'Art',
      'Ballet',
      'Blues',
      'Britpop',
      'Classics',
      'Comedy',
      'Dream Pop',
      'Electro-pop',
      'Electronic Dance Music',
      'Folk',
      'Garage rock',
      'Glam rock',
      'Gothic rock',
      'Hardcore',
      'Heavy metal',
      'Hip-hop',
      'Indie',
      'Industrial',
      'Instrumental',
      'Jazz',
      'Martial arts',
      'Metal',
      'Metalcore',
      'Musical theatre',
      'Nu metal',
      'Opera',
      'Operetta',
      'Poetry',
      'Pop',
      'Pop-rock',
      'Post-punk',
      'Punk-rock',
      'Rap rock',
      'Retro',
      'Rock',
      'Rock opera',
      'Shanson',
      'Stand-up',
      'Techno',
      'Trance',
      'Trip-hop',
      'dnb',
    ].map(styleName => ({ name: styleName }));
    await connection
      .createQueryBuilder()
      .insert()
      .into('styles')
      .values(styles)
      .execute();
  }
}
