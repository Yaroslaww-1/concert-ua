import { Throwable } from 'src/common/error/throwable';
import { createRandomString } from 'src/common/string/create-random-string';
import api from '../api.helper';
import { defaultCity } from '../models/city.model';
import { EventModel } from '../models/event.model';
import { defaultPlace, PlaceModel } from '../models/place.model';

const endpoint = 'events';

const getPlace = (): PlaceModel => ({
  id: createRandomString(10),
  name: createRandomString(10),
  city: defaultCity,
  address: 'some address, Kyiv Ukraine',
});

const eventUrls = [
  'https://i.imgur.com/RSBQEKD.jpg',
  'https://i.imgur.com/aeBbstI.jpg',
  'https://i.imgur.com/rOZXIQ2.jpg',
  'https://i.imgur.com/iqPWUCF.jpg',
];

const descriptionHTML = `
  <div class="event-simple-text wysiwyg"><p> <strong>Концерти HURTS в Києві: не пропусти 31 березня в Палаці спорту!</strong>
  </p>
  <h2> Чому варто піти на концерт HURTS? </h2>
  <ol>
  <li> Це будуть перші за три роки лайв HURTS в Києві. </li>
  <li> Оцінити новий дарк-поп альбом і круте шоу. </li>
  <li> Ви ж так скучили за великим концертам! </li>
  </ol>
  <h2> HURTS в Києві: масштабне шоу і презентація нового альбому </h2>
  <p> <strong>У Києві британський поп-дует Hurts починав з невеликого Crystal Hall, а в 2021 вони "упакують" Палац спорту відразу в двох містах. Запам'ятовуй дати: 30 березня – Одеса, 31 березня – Київ.</strong>
  </p>
  <p> Це буде один з наймасштабніших турів Hurts Східною Європою, а для нас – перша зустріч з дуетом з 2018 року. Цього разу вони привезуть новий альбом Faith, над яким працювали довгих три роки.
  </p> 
  <h2> Презентація альбому Faith </h2>
  <p> Faith вийде у вересні 2020 і стане п'ятою студійною роботою гурту. Тео Хатчкрафт і Адам Андерсон писали його три роки – це найдовша пауза між альбомами за всю їхню історію.
  </p>
  <p> Хатчкрафт каже, що причиною були особисті проблеми:
  </p>
  <blockquote> "Я був абсолютно виснажений фізично і ментально. Мені потрібно було зупинитися і дуже довгий час нічого не робити, оскільки не виходило думати, фокусуватися, взагалі нічого. І, якщо чесно, я не знав, яке майбутнє чекає на мене, на Hurts і чи запишемо ми ще один альбом ".
  </blockquote>
  <p> Цікаво, що каталізаторами творчого процесу для Хатчкрафт стали сліпа терапія і догляд за живим восьминогом. Терапія допомагала зосередитися на інших відчуттях і розібратися з душевними переживаннями. А восьминоги ... ну, це теж був незвичайний досвід.
  </p>
  <p> <strong>Але найголовніше в новому альбомі те, що вони повертаються до серйозної поп-музики:</strong>
  </p>
  <blockquote> "Ми заново полюбили той тип музики, з якого починали. Ми завжди вкручувати щось похмуре в наші пісні і, здається, у нас вдало вийшло повернутися до цього повною мірою".
  </blockquote>
  <p> Перші сингли - Voices, Suffer і Redemption - показують, що Hurts дотримуються заданого напрямку. Решту матеріалу ми вперше почуємо вже восени, а наживо - на великих концертах у 2021.
  </p>
  <h2> ДЕ КУПИТИ КВИТКИ НА HURTS В Києві? </h2>
  <p> Ти можеш купити квитки на HURTS в Києві на Concert.ua. Швидше за все оформити онлайн - після оплати квитки будуть доступні на email і в Особистому кабінеті на сайті.
  </p></div>`;

let eventId = 0;
let eventUrlIndex = -1;

const getEvent = (): EventModel => {
  eventId += 1;
  eventUrlIndex += 1;
  eventUrlIndex = eventUrlIndex % 4;
  return {
    id: `id${eventId}`,
    name: createRandomString(10),
    description: 'string',
    descriptionHTML,
    place: getPlace(),
    date: new Date(),
    imageUrl: eventUrls[eventUrlIndex],
    price: '100uah',
    tags: [createRandomString(5), createRandomString(5)],
    promoter: 'promoter',
    hot: Math.random() > 0.5,
  };
};

const events: EventModel[] = [
  ...Array(4)
    .fill(0)
    .map(() => getEvent()),
];

const newEvents: EventModel[] = [
  ...Array(10)
    .fill(0)
    .map(() => getEvent()),
];

export interface IEventFilter {
  date?: {
    from: Date;
    to: Date;
  };
  placesIds?: string[];
  stylesIds?: string[];
}

export class EventService {
  constructor() {}
  static async getEvents(filter: IEventFilter = {}): Promise<EventModel[]> {
    console.log('Events fetching');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(events);
      }, 10);
    });
  }

  static async getNewEvents(): Promise<EventModel[]> {
    console.log('New events fetching');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([...newEvents]);
      }, 10);
    });
  }

  static async getPopularEvents(): Promise<EventModel[]> {
    console.log('Popular events fetching');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([...newEvents].reverse());
      }, 10);
    });
  }

  static async getEventById(id: string): Promise<EventModel> {
    console.log('Event fetching');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const event = events.find((event) => event.id === id);
        if (!event) {
          return reject(new Error('event with given id was not found'));
        }
        resolve(event);
      }, 10);
    });
  }
}
