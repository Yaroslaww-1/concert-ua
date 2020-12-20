import React from 'react';

import styles from './styles.module.scss';

import { ArtistModel } from 'src/api/models/artist.model';
import Text from 'src/components/Text';

export interface IProps {
  artist: ArtistModel;
}

const Header: React.FC<IProps> = ({ artist }) => {
  const {
    mainImage: { url: imageUrl },
    name,
  } = artist;
  return (
    <div className={styles.root}>
      <div
        className={styles.imageRoot}
        style={{ background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${imageUrl}` }}
      >
        <div className={styles.name}>
          <Text
            fontSize="5rem"
            textTransform="uppercase"
            fontFamily="League Gothic"
            textAlign="left"
            wordBreak="break-word"
          >
            {name}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Header;
