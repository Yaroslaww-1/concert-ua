import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class seedEventsStylesTable1608417563442 implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection.query('TRUNCATE TABLE events_styles;');
    const styles = await connection
      .createQueryBuilder()
      .select()
      .from('styles', 'styles')
      .execute();
    const events = await connection
      .createQueryBuilder()
      .select()
      .from('events', 'events')
      .execute();

    const eventsStyles = [];
    for (const event of events) {
      eventsStyles.push({
        eventId: event.id,
        styleId: styles[Math.floor(Math.random() * styles.length)].id,
      });
    }

    await connection
      .createQueryBuilder()
      .insert()
      .into('events_styles', ['eventId', 'styleId'])
      .values(eventsStyles)
      .execute();
  }
}
