import React from 'react';

import { ArtistModel } from 'src/api/models/artist.model';

import styles from './styles.module.scss';
import SquareImage from 'src/components/EventImageComponents/Images/SquareImage';
import Text from 'src/components/Text';
import SquareImageHoverOverlay from 'src/components/EventImageComponents/HoverOverlays/SquareImageHover';
import { redirectToArtist } from 'src/common/url/redirect-to-artist-by-id';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useIsDesktop } from 'src/common/hooks/media-hooks';

type IProps = {
  artist: ArtistModel;
} & RouteComponentProps;

const Artist: React.FC<IProps> = ({ artist, history }) => {
  const isDesktop = useIsDesktop();
  const artistNameFontSize = isDesktop ? '7rem' : '5rem';

  return (
    <SquareImage
      imageSrc={artist.imageUrl}
      classes={{ root: styles.imageRoot }}
      frontElement={
        <div className={styles.artistName}>
          <Text fontSize={artistNameFontSize} textTransform="uppercase" fontFamily="League Gothic">
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
          onBottomButtonClick={() => redirectToArtist(history, artist.id)}
          classes={{ titleTextRoot: styles.titleTextRoot }}
        />
      }
    />
  );
};

export default withRouter(Artist);
