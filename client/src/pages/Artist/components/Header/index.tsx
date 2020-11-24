import React from 'react';

import styles from './styles.module.scss';

import { ArtistModel } from 'src/api/models/artist.model';
import Text from 'src/components/Text';

export interface IProps {
  artist: ArtistModel;
}

const Header: React.FC<IProps> = ({ artist }) => {
  const { imageUrl, name } = artist;
  return (
    <div className={styles.root}>
      <div className={styles.imageRoot} style={{ backgroundImage: `url(${imageUrl}` }}>
        <div className={styles.name}>
          <Text>{name}</Text>
        </div>
      </div>
    </div>
  );
};

export default Header;
