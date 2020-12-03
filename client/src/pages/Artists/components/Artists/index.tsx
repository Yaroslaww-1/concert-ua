import React from 'react';

import { ArtistModel } from 'src/api/models/artist.model';

import styles from './styles.module.scss';
import SquareImage from 'src/components/EventImageComponents/Images/SquareImage';
import Text from 'src/components/Text';
import SquareImageHoverOverlay from 'src/components/EventImageComponents/HoverOverlays/SquareImageHover';

interface IProps {
  artist: ArtistModel;
}

const Artist: React.FC<IProps> = ({ artist }) => {
  return (
    <SquareImage
      imageSrc={artist.imageUrl}
      classes={{ root: styles.imageRoot }}
      frontElement={
        <div className={styles.artistName}>
          <Text fontSize="7rem" textTransform="uppercase" fontFamily="League Gothic">
            {artist.name}
          </Text>
        </div>
      }
      hoverElement={
        <SquareImageHoverOverlay
          title={artist.name}
          imageSrc={artist.imageUrl}
          onLike={() => {}}
          bottomButtonText="About"
          onBottomButtonClick={() => {}}
          classes={{ titleTextRoot: styles.titleTextRoot }}
        />
      }
    />
  );
};

export default Artist;
