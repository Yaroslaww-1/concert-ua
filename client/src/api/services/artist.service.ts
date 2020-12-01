import { createRandomString } from 'src/common/string/create-random-string';
import api from '../api.helper';
import { ArtistModel } from '../models/artist.model';
import { EventModel } from '../models/event.model';
import { EventService } from './event.service';

const endpoint = 'artists';

const artistUrls = [
  'https://i.imgur.com/RSBQEKD.jpg',
  'https://i.imgur.com/aeBbstI.jpg',
  'https://i.imgur.com/rOZXIQ2.jpg',
  'https://i.imgur.com/iqPWUCF.jpg',
];

const descriptionHTML = `
  <p>HURTS – відомий британський поп-дует, що свого часу стрімко увірвався до музичного світу. Широка географія виступів, аншлаги на концертах, гучні рекорди і престижні нагороди, переможні виступи на світових фестивалях – всього цього гурт досягнув лише за 10 років музичної кар’єри.</p>
  <h2>Hurts: коли талант, щирість і молодість беруть найскладніші вершини</h2>
  <p>Hurts свого часу стали свіжим подихом для музичного світу, запропонувавши слухачеві нові ритми, красиві мелодії, романтичні тексти. Пісні гурту стабільно посідають перші місця у престижних хіт-парадах. Хіт Stay став саундтреком одразу до кількох телепроєктів (у США, Україні, Німеччині та Новій Зеландії). А авторитетне видання Star Magazine віддало пісні п’ять зірок із п’яти.</p>
  <p>І дуже важко повірити, що двоє харизматичних хлопців, що з’явилися на музичній сцені блискавично, за крок до успіху були… на обліку в центрі зайнятості. Все змінив кліп на пісню Wonderful Life, що коштував співкам лише 20 фунтів. Але після завантаження в мережу ролик став вірусним і почав збирати мільйонні перегляди.</p>
  <h2>Шалений успіх дебютного альбому Happiness та творче повернення Хьортс з платівкою Faith</h2>
  <p>За стилем музику Хьортс відносять до жанру електропоп. Самі ж Тео та Адам визначають свою творчість як noir'n'b and doom pop. В арсеналі дуету – п’ять альбомів:</p>
  <ul><li>Happiness;</li><li>Exile;</li><li>Surrender;</li><li>Desire;</li><li>Faith.</li></ul>
  <p>Дебютна платівка одразу ж потрапила на 4 місце національного британського хіт-параду. За перший тиждень продали понад 25 тисяч дисків, і на 2010-й рік це був абсолютний рекорд. Альбом отримав статус «золотого» та «платинового» у багатьох країнах світу.</p>
  <p>Новий альбом Faith вийшов на лейблі Lento Records і став для дуету «поверненням до першоджерел» і другим диханням для гурту після дворічної творчої паузи.</p>
  <p><strong>Британський дует неодноразово приїздив до України з концертами. Тому має величезну армію прихильників в нашій країні.</strong></p>
  <h2>Де купити квитки на концерти HURTS?</h2>
  <p>Купити квитки на концерти Hurts ви завжди можете на Concert.ua. Простий і зручний сервіс – і квитки вже у кишені!</p>`;

let artistId = 0;
let artistUrlIndex = -1;

const getArtist = (): ArtistModel => {
  artistId += 1;
  artistUrlIndex += 1;
  artistUrlIndex = artistUrlIndex % 4;
  return {
    id: `id${artistId}`,
    name: createRandomString(10),
    descriptionHTML,
    imageUrl: artistUrls[artistUrlIndex],
    galleryImagesUrls: [...artistUrls],
  };
};

const artists: ArtistModel[] = [
  ...Array(4)
    .fill(0)
    .map(() => getArtist()),
];

export interface IArtistFilter {
  placesIds?: string[];
  name?: string;
}

export class ArtistService {
  constructor() {}
  static async getArtists(filter: IArtistFilter = {}): Promise<ArtistModel[]> {
    console.log('Artists fetching');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(artists);
      }, 10);
    });
  }

  static async getArtistById(id: string): Promise<ArtistModel> {
    console.log('Artist fetching');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const artist = artists.find((artist) => artist.id === id);
        if (!artist) {
          return reject(new Error('artist with given id was not found'));
        }
        resolve(artist);
      }, 10);
    });
  }

  static async getTicketsByArtistId(artistId: string): Promise<EventModel[]> {
    console.log('Artist tickets fetching');
    const allEvents = await EventService.getEvents();
    return [
      ...allEvents.filter((event) => event.artist.id === artistId),
      ...allEvents.filter((event) => event.artist.id === artistId),
    ];
  }
}
