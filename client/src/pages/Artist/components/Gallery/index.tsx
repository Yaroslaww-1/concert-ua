import React from 'react';
import { ArtistModel } from 'src/api/models/artist.model';

import styles from './styles.module.scss';

import Carousel from 'src/components/Carousel';

type IProps = {
  artist: ArtistModel;
};

const ArtistGallery: React.FC<IProps> = ({ artist }) => {
  return (
    <div className={styles.root}>
      <Carousel
        items={artist.galleryImages.map(({ url }) => ({ url }))}
        withDots={false}
        withArrowShadow={false}
        classes={{ nextArrow: styles.nextArrow, prevArrow: styles.prevArrow }}
      />
    </div>
  );
};

export default ArtistGallery;
