import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class seedEventsTagsTable1608318594084 implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection.query('TRUNCATE TABLE events_tags;');
    const tags = await connection
      .createQueryBuilder()
      .select()
      .from('event_tags', 'event_tags')
      .execute();
    const events = await connection
      .createQueryBuilder()
      .select()
      .from('events', 'events')
      .execute();

    const eventsTags = [];
    for (let i = 0; i < 1000; i++) {
      eventsTags.push({
        tagId: tags[Math.floor(Math.random() * tags.length)].id,
        eventId: events[Math.floor(Math.random() * events.length)].id,
      });
    }

    await connection
      .createQueryBuilder()
      .insert()
      .into('events_tags', ['tagId', 'eventId'])
      .values(eventsTags)
      .execute();
  }
}
