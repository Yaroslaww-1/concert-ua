import { MigrationInterface, QueryRunner } from 'typeorm';

export class seedStylesTable1607622105682 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
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
    queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('styles')
      .values(styles)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.clearTable('styles');
  }
}
