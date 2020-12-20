import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ForwarderRefProps, withRouterAndRef } from 'src/common/hoc/with-router-and-ref';

import { ArtistShortModel } from 'src/api/models/artist-short.model';
import { redirectToArtist } from 'src/common/url/redirect-to-artist-by-id';

import styles from './styles.module.scss';
import Text from 'src/components/Text';
import ArtistHoverOverlay from 'src/components/EventImageComponents/HoverOverlays/ArtistImageHover';
import { useIsTablet } from 'src/common/hooks/media-hooks';

type IProps = {
  artist: ArtistShortModel;
};
const Artist: React.FC<IProps & RouteComponentProps & ForwarderRefProps<HTMLDivElement>> = ({
  artist,
  history,
  forwardRef,
}) => {
  const [hovered, setHovered] = React.useState<boolean>(false);
  const isTablet = useIsTablet();

  const onAboutClick = () => redirectToArtist(history, artist.id);

  return (
    <div className={styles.root} ref={forwardRef} onClick={() => isTablet && onAboutClick()}>
      <Text color="black" textAlign="left" textTransform="uppercase" fontSize="3rem" fontFamily="League Gothic">
        Artist
      </Text>
      <div className={styles.content} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <img src={artist.mainImage.url} alt="An artist image"></img>
        {!hovered && (
          <Text
            textTransform="uppercase"
            fontSize="5.625rem"
            fontFamily="League Gothic"
            classes={{ root: styles.artistName }}
          >
            {artist.name}
          </Text>
        )}
        {hovered && <ArtistHoverOverlay artist={artist} onAboutClick={onAboutClick} />}
      </div>
    </div>
  );
};

export default withRouterAndRef<IProps, HTMLDivElement>(Artist as React.FC<IProps>);
