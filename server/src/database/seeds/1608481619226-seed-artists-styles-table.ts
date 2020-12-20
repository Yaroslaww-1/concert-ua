import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class seedArtistsStylesTable1608481619226 implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection.query('TRUNCATE TABLE artists_styles;');
    const styles = await connection
      .createQueryBuilder()
      .select()
      .from('styles', 'styles')
      .execute();
    const artists = await connection
      .createQueryBuilder()
      .select()
      .from('artists', 'artists')
      .execute();

    const artistsStyles = [];
    for (const artist of artists) {
      artistsStyles.push({
        artistId: artist.id,
        styleId: styles[Math.floor(Math.random() * styles.length)].id,
      });
    }

    await connection
      .createQueryBuilder()
      .insert()
      .into('artists_styles', ['artistId', 'styleId'])
      .values(artistsStyles)
      .execute();
  }
}
