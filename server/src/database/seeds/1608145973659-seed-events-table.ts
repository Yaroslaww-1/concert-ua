import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class seedEventsTable1608145973659 implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection.query('TRUNCATE TABLE events CASCADE;');
    const description = 'Sunt et do amet aute aliquip irure irure.';
    const descriptionHTML = `
        <p> <strong>LOREN concert: Cillum duis est culpa eiusmod aute incididunt laborum pariatur.</strong> </p>
        <h2> Ipsum nostrud reprehenderit </h2>
        <ol>
        <li> Reprehenderit ea minim nulla tempor elit labore pariatur amet officia qui. </li>
        <li> Eu esse qui tempor velit officia. </li>
        <li> Aliquip reprehenderit duis sunt id velit! </li>
        </ol>
        <h2> LOREM: iusmod occaecat commodo dolore proident sit elit! </h2>
        <p> <strong>Qui enim sint pariatur duis est dolore tempor nisi reprehenderit qui consequat aliqua. Ut ipsum voluptate commodo commodo in commodo exercitation. </strong> </p>
        <p> This will be one of the largest Hurts tours in Eastern Europe, and for us - the first meeting with the duo since 2018. This time they will bring a new album Faith, which they worked on for three long years. </p>
        <h2> Presentation of the album Faith </h2>
        <p> Cillum fugiat labore amet excepteur non quis mollit ut eu non adipisicing. Mollit nostrud elit proident incididunt adipisicing aute cupidatat velit. </p>
        <p> Elit laboris non reprehenderit id commodo anim: </p>
        <blockquote> "Consectetur in proident aliqua incididunt deserunt magna deserunt aliqua est Lorem nisi. Cupidatat tempor cupidatat nostrud proident esse nulla mollit est cillum.". </blockquote>
        <p> Consectetur pariatur pariatur occaecat incididunt qui anim. Consectetur pariatur pariatur occaecat incididunt qui anim. Consectetur pariatur pariatur occaecat incididunt qui anim. </p>
        <p> <strong> Fugiat labore cillum nisi ullamco proident exercitation fugiat eu laborum commodo laboris ut:</strong> </p>
        <blockquote> "Ea dolor incididunt voluptate reprehenderit consequat incididunt magna occaecat id ad nostrud officia elit dolor. Sit ex aliquip laboris deserunt minim ex cupidatat. " </blockquote>
        <p> Voluptate enim irure amet laborum. Velit consectetur qui ut consectetur consequat nostrud officia qui labore qui tempor amet occaecat. </p>
        <h2> WHERE TO BUY TICKETS FOR LOREM? </h2><p> You can buy tickets for LOREM at Music.ua. Most likely to issue online - after payment tickets will be available by email and in the Personal account on the site. </p>
    `;
    const places = await connection
      .createQueryBuilder()
      .select()
      .from('places', 'places')
      .execute();
    const eventImages = [
      'https://i.imgur.com/6quVFpw.jpg',
      'https://i.imgur.com/91YAOMX.jpg',
      'https://i.imgur.com/4zhqYmQ.jpg',
      'https://i.imgur.com/0xj86Wg.jpg',
      'https://i.imgur.com/QmrKJAV.jpg',
      'https://i.imgur.com/vpW2vsd.jpg',
      'https://i.imgur.com/PJOjrpv.jpg',
      'https://i.imgur.com/azQbJn3.jpg',
      'https://i.imgur.com/v9c97P0.jpg',
      'https://i.imgur.com/WRYkWhb.jpg',
      'https://i.imgur.com/9suHaeG.jpg',
      'https://i.imgur.com/Bb1yZfT.jpg',
      'https://i.imgur.com/hERJeDI.jpg',
      'https://i.imgur.com/t5WKrXh.jpg',
      'https://i.imgur.com/FJv1NsZ.png',
      'https://i.imgur.com/Krf25v5.jpg',
      'https://i.imgur.com/0fIPusL.jpg',
      'https://i.imgur.com/c4Spx5o.jpg',
      'https://i.imgur.com/WpK9ne3.jpg',
      'https://i.imgur.com/TOZMgxe.jpg',
      'https://i.imgur.com/zuQqQbq.jpg',
      'https://i.imgur.com/t680oT6.jpg',
      'https://i.imgur.com/VFvHy8S.jpg',
      'https://i.imgur.com/b1g7R9f.jpg',
      'https://i.imgur.com/lQYUAH9.jpg',
      'https://i.imgur.com/yMeu9p3.jpg',
      'https://i.imgur.com/zhq04eF.jpg',
      'https://i.imgur.com/Tp3gQ3O.jpg',
      'https://i.imgur.com/WqflJSR.png',
      'https://i.imgur.com/zk9qQMF.jpg',
      'https://i.imgur.com/rkyqQTG.jpg',
      'https://i.imgur.com/iKKlb3L.png',
      'https://i.imgur.com/h5Kzieg.png',
      'https://i.imgur.com/t1mxYgQ.jpg',
      'https://i.imgur.com/pscIQKO.jpg',
      'https://i.imgur.com/vostECL.png',
      'https://i.imgur.com/4XZvuC2.png',
      'https://i.imgur.com/vi9QnXZ.jpg',
      'https://i.imgur.com/4DBnGs7.jpg',
      'https://i.imgur.com/MYoeDdF.png',
      'https://i.imgur.com/ZltXIqq.jpg',
      'https://i.imgur.com/087pmxc.jpg',
      'https://i.imgur.com/LvBiVAz.png',
      'https://i.imgur.com/L13MRD2.png',
      'https://i.imgur.com/wvgMvsc.jpg',
      'https://i.imgur.com/2C3o8Sp.jpg',
      'https://i.imgur.com/kih4m20.jpg',
      'https://i.imgur.com/oRLT6Pl.jpg',
      'https://i.imgur.com/fJWr43A.jpg',
      'https://i.imgur.com/YFIBv7W.jpg',
      'https://i.imgur.com/TZ1wvGY.png',
      'https://i.imgur.com/4BT9oTl.jpg',
      'https://i.imgur.com/rCL8jyB.jpg',
      'https://i.imgur.com/sfD4lK7.jpg',
      'https://i.imgur.com/ujY2p4m.jpg',
      'https://i.imgur.com/AxHvfWn.jpg',
      'https://i.imgur.com/90MJahH.png',
      'https://i.imgur.com/7NKCgcj.jpg',
      'https://i.imgur.com/ZhpxA0j.jpg',
      'https://i.imgur.com/aHU4sGk.png',
      'https://i.imgur.com/Mv5cgg8.jpg',
      'https://i.imgur.com/7x18LgU.jpg',
      'https://i.imgur.com/7p2TZsC.jpg',
      'https://i.imgur.com/VAFOZdb.jpg',
      'https://i.imgur.com/H31fk6P.jpg',
      'https://i.imgur.com/CyKZUyl.jpg',
      'https://i.imgur.com/wUEAihr.jpg',
      'https://i.imgur.com/rTaNrj6.jpg',
      'https://i.imgur.com/8Y3nz1y.jpg',
      'https://i.imgur.com/WnmHzYq.jpg',
      'https://i.imgur.com/U1uwRcM.jpg',
      'https://i.imgur.com/GF5JqaZ.jpg',
      'https://i.imgur.com/rIbCEPX.jpg',
      'https://i.imgur.com/RldMBDO.jpg',
      'https://i.imgur.com/zi7jHER.jpg',
      'https://i.imgur.com/mB72TIx.jpg',
      'https://i.imgur.com/pt9Nuqr.jpg',
      'https://i.imgur.com/q5zJDQb.jpg',
      'https://i.imgur.com/mjHBVrF.jpg',
      'https://i.imgur.com/bSX2RVP.jpg',
      'https://i.imgur.com/lXR6nta.jpg',
      'https://i.imgur.com/fufvvT2.jpg',
      'https://i.imgur.com/Ws0wrZE.jpg',
      'https://i.imgur.com/mmFRWVx.jpg',
      'https://i.imgur.com/72dScNw.jpg',
      'https://i.imgur.com/Yl3k3v0.jpg',
      'https://i.imgur.com/uGIwKdt.jpg',
      'https://i.imgur.com/NViaoIH.jpg',
      'https://i.imgur.com/PBsKjpJ.jpg',
      'https://i.imgur.com/SMHI3ak.jpg',
      'https://i.imgur.com/02xHOZo.jpg',
      'https://i.imgur.com/2HdnIfQ.png',
      'https://i.imgur.com/qBm95Jg.jpg',
      'https://i.imgur.com/ml2r5vl.jpg',
      'https://i.imgur.com/qsLsPHX.jpg',
      'https://i.imgur.com/4uNFm70.jpg',
      'https://i.imgur.com/nmyjR3a.jpg',
      'https://i.imgur.com/Xzuw3iP.png',
      'https://i.imgur.com/0MyeuZF.jpg',
      'https://i.imgur.com/oP4rYH6.png',
      'https://i.imgur.com/Lc4WyGE.jpg',
      'https://i.imgur.com/SDMPWC7.jpg',
      'https://i.imgur.com/hjdWaEX.jpg',
      'https://i.imgur.com/WYtOWP2.jpg',
      'https://i.imgur.com/RtIjqBa.jpg',
      'https://i.imgur.com/LkNUqeQ.jpg',
      'https://i.imgur.com/SmPMFND.jpg',
      'https://i.imgur.com/9pPPSM4.png',
      'https://i.imgur.com/Bjc1gXM.jpg',
      'https://i.imgur.com/oiveS83.jpg',
      'https://i.imgur.com/jAnjSs2.jpg',
      'https://i.imgur.com/stdR2fO.png',
      'https://i.imgur.com/X3Vyaus.jpg',
      'https://i.imgur.com/obZq8Q5.png',
      'https://i.imgur.com/sxHtvGK.jpg',
      'https://i.imgur.com/0kVS7pX.png',
      'https://i.imgur.com/P089XSk.png',
      'https://i.imgur.com/SszljbA.jpg',
      'https://i.imgur.com/oXg2sU6.png',
      'https://i.imgur.com/jo0qRbh.png',
      'https://i.imgur.com/18379yd.png',
      'https://i.imgur.com/bfKlDfO.png',
      'https://i.imgur.com/FFkOCRQ.png',
      'https://i.imgur.com/oI2zmgh.png',
      'https://i.imgur.com/uXYnJT2.png',
      'https://i.imgur.com/vm1369a.png',
      'https://i.imgur.com/zk854FA.jpg',
      'https://i.imgur.com/PimsA8d.png',
      'https://i.imgur.com/geozQQr.png',
      'https://i.imgur.com/jBHXIbH.png',
      'https://i.imgur.com/IACEstr.png',
      'https://i.imgur.com/WW7pcYU.png',
      'https://i.imgur.com/UjP3xLo.png',
      'https://i.imgur.com/9RUHWoX.png',
      'https://i.imgur.com/NGACfHs.png',
    ];

    const artists = await connection
      .createQueryBuilder()
      .select()
      .from('artists', 'artists')
      .execute();

    function randomDate(start: Date, end: Date) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    const events = [];
    for (const artist of artists) {
      const eventsNumber = Math.floor(Math.random() * 3) + 1;
      for (let eventNumber = 1; eventNumber <= eventsNumber; eventNumber++) {
        events.push({
          name: `${artist.name} event #${eventNumber}`,
          description,
          descriptionHTML,
          place: places[Math.floor(Math.random() * places.length)],
          date: randomDate(new Date(2020, 10, 1), new Date()),
          imageUrl: eventImages[Math.floor(Math.random() * eventImages.length)],
          price: Math.floor(Math.random() * 1000) + 100,
          promoter: 'promoter',
          hot: Math.random() < 0.1,
          artist: artist,
        });
      }
    }

    await connection
      .createQueryBuilder()
      .insert()
      .into('events')
      .values(events)
      .execute();
  }
}
