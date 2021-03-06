import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class seedArtistsImagesTable1607712458016 implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection.query('TRUNCATE TABLE "ArtistsImages" CASCADE;');
    const artists = await connection
      .createQueryBuilder()
      .select()
      .from('artists', 'artists')
      .execute();
    const artistsImagesUrls = [
      'https://i.imgur.com/qSnDWHu.jpeg',
      'https://i.imgur.com/4VDt3iO.jpeg',
      'https://i.imgur.com/60TQ7Vj.jpeg',
      'https://i.imgur.com/8TyG7NM.jpeg',
      'https://i.imgur.com/h7NdjeD.jpeg',
      'https://i.imgur.com/DyRQrEm.jpeg',
      'https://i.imgur.com/gm7lTVZ.jpeg',
      'https://i.imgur.com/cREb8lo.jpeg',
      'https://i.imgur.com/t6ZC9ri.jpeg',
      'https://i.imgur.com/JMO0kwf.jpeg',
      'https://i.imgur.com/SHQkbTe.jpeg',
      'https://i.imgur.com/ce3WpZH.jpeg',
      'https://i.imgur.com/CGFXoos.jpeg',
      'https://i.imgur.com/c72Zz9I.jpeg',
      'https://i.imgur.com/iOfra45.jpeg',
      'https://i.imgur.com/CIGsc2C.jpeg',
      'https://i.imgur.com/UXtyhCr.jpeg',
      'https://i.imgur.com/w5G8N1p.jpeg',
      'https://i.imgur.com/WsI4iaD.jpeg',
      'https://i.imgur.com/F1Arm3o.jpeg',
      'https://i.imgur.com/1SaGN3W.jpeg',
      'https://i.imgur.com/Xl457iW.jpeg',
      'https://i.imgur.com/AxNBvj8.jpeg',
      'https://i.imgur.com/7aqYwLZ.jpeg',
      'https://i.imgur.com/QMBN7cx.jpeg',
      'https://i.imgur.com/tXx0YDR.jpeg',
      'https://i.imgur.com/7qA4Pg5.jpeg',
      'https://i.imgur.com/jJsamYa.jpeg',
      'https://i.imgur.com/MSQ75ht.png',
      'https://i.imgur.com/sHVGyPW.jpeg',
      'https://i.imgur.com/abSTbhV.jpeg',
      'https://i.imgur.com/L5fexg3.jpeg',
      'https://i.imgur.com/m3K5vSW.jpeg',
      'https://i.imgur.com/pJktpt7.jpeg',
      'https://i.imgur.com/sZmht3A.jpeg',
      'https://i.imgur.com/b399f4I.jpeg',
      'https://i.imgur.com/LlK2KCq.jpeg',
      'https://i.imgur.com/tf6KvE5.jpeg',
      'https://i.imgur.com/hPkunSd.jpeg',
      'https://i.imgur.com/mxUVDpp.jpeg',
      'https://i.imgur.com/oTBLAvc.jpeg',
      'https://i.imgur.com/30xpmHg.jpeg',
      'https://i.imgur.com/LnOvH7M.jpeg',
      'https://i.imgur.com/zcJm2GW.jpeg',
      'https://i.imgur.com/758gA2a.jpeg',
      'https://i.imgur.com/XCsQiEV.jpeg',
      'https://i.imgur.com/Lt11sYY.jpeg',
      'https://i.imgur.com/qeDxV5f.jpeg',
      'https://i.imgur.com/e5eMkGi.jpeg',
      'https://i.imgur.com/67gdwud.jpeg',
      'https://i.imgur.com/6Kl3eAY.jpeg',
      'https://i.imgur.com/LItGwf2.jpeg',
      'https://i.imgur.com/ExWD9m3.jpeg',
      'https://i.imgur.com/bLETQEb.jpeg',
      'https://i.imgur.com/n6lGcW3.jpeg',
      'https://i.imgur.com/L63PgFo.jpeg',
      'https://i.imgur.com/gxHjT9R.jpeg',
      'https://i.imgur.com/UW8N9uH.jpeg',
      'https://i.imgur.com/OLNg1pi.jpeg',
      'https://i.imgur.com/FDi3NoG.jpeg',
      'https://i.imgur.com/wd9GM2q.jpeg',
      'https://i.imgur.com/mWsa0wF.jpeg',
      'https://i.imgur.com/wYfMrxN.jpeg',
      'https://i.imgur.com/2zhCMLz.jpeg',
      'https://i.imgur.com/Xm3Me5H.jpeg',
      'https://i.imgur.com/VymwTt5.jpeg',
      'https://i.imgur.com/EDusz4H.jpeg',
      'https://i.imgur.com/s7LeWkh.jpeg',
      'https://i.imgur.com/XJUoPGA.jpeg',
      'https://i.imgur.com/7sBuYvF.jpeg',
      'https://i.imgur.com/tuioZJC.jpeg',
      'https://i.imgur.com/OKHgJNd.jpeg',
      'https://i.imgur.com/RFUJQfd.jpeg',
      'https://i.imgur.com/QkAUAj2.jpeg',
      'https://i.imgur.com/3oyKUqb.jpeg',
      'https://i.imgur.com/gqTUYUV.jpeg',
      'https://i.imgur.com/IxdKu8l.jpeg',
      'https://i.imgur.com/KTyH0XC.jpeg',
      'https://i.imgur.com/VqdsBVy.jpeg',
      'https://i.imgur.com/oGhbDCw.jpeg',
      'https://i.imgur.com/Am3ekAS.jpeg',
      'https://i.imgur.com/AlkDUJl.jpeg',
      'https://i.imgur.com/e1RgYD5.jpeg',
      'https://i.imgur.com/RzZYjzP.jpeg',
      'https://i.imgur.com/E3p1do6.jpeg',
      'https://i.imgur.com/vQWY60Q.jpeg',
      'https://i.imgur.com/XsVENIe.jpeg',
      'https://i.imgur.com/0KZMJez.jpeg',
      'https://i.imgur.com/qkAu5ou.jpeg',
      'https://i.imgur.com/k4EUIo3.jpeg',
      'https://i.imgur.com/s8OxQUc.jpeg',
      'https://i.imgur.com/bdcdXtT.jpeg',
      'https://i.imgur.com/8k6KBfo.jpeg',
      'https://i.imgur.com/J93zQ9W.jpeg',
      'https://i.imgur.com/KbS6ztB.jpeg',
      'https://i.imgur.com/WPOeWWb.jpeg',
      'https://i.imgur.com/lcuYeto.jpeg',
      'https://i.imgur.com/HyZDIXm.jpeg',
      'https://i.imgur.com/cqB31UB.jpeg',
      'https://i.imgur.com/osjbmhN.jpeg',
      'https://i.imgur.com/6BhOssv.jpeg',
    ];
    const artistsImages = [
      ...artistsImagesUrls,
      ...artistsImagesUrls,
      ...artistsImagesUrls,
      ...artistsImagesUrls,
      ...artistsImagesUrls,
      ...artistsImagesUrls,
      ...artistsImagesUrls,
      ...artistsImagesUrls,
      ...artistsImagesUrls,
    ].map((artistImageUrl, index) => {
      const artist = artists[index % artists.length];
      return {
        url: artistImageUrl,
        isMain: index < artists.length,
        artist,
      };
    });
    await connection
      .createQueryBuilder()
      .insert()
      .into('ArtistsImages')
      .values(artistsImages)
      .execute();
  }
}
