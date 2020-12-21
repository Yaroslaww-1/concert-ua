import React from 'react';

import { ArtistModel } from 'src/api/models/artist.model';

import styles from './styles.module.scss';
import SquareImage from 'src/components/EventImageComponents/Images/SquareImage';
import Text from 'src/components/Text';
import SquareImageHoverOverlay from 'src/components/EventImageComponents/HoverOverlays/SquareImageHover';
import { redirectToArtist } from 'src/common/url/redirect-to-artist-by-id';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useIsDesktop, useIsTablet } from 'src/common/hooks/media-hooks';

type IProps = {
  artist: ArtistModel;
} & RouteComponentProps;

const Artist: React.FC<IProps> = ({ artist, history }) => {
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();
  const artistNameFontSize = isDesktop ? '7rem' : '5rem';

  const onClick = () => redirectToArtist(history, artist.id);

  return (
    <SquareImage
      onClick={() => isTablet && onClick()}
      imageSrc={artist.mainImage.url}
      classes={{ root: styles.imageRoot }}
      frontElement={
        <div className={styles.artistName}>
          <Text fontSize={artistNameFontSize} textTransform="uppercase" fontFamily="League Gothic" lineHeight={1}>
            {artist.name}
          </Text>
        </div>
      }
      hoverElement={
        <SquareImageHoverOverlay
          title={artist.name}
          imageSrc={artist.mainImage.url}
          onLike={() => {}}
          bottomButtonText="About"
          onBottomButtonClick={onClick}
          classes={{ titleTextRoot: styles.titleTextRoot }}
        />
      }
    />
  );
};

export default withRouter(Artist);
