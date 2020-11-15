import React from 'react';

import styles from './styles.module.scss';
import Text from 'src/components/Text';
import { ArtistModel } from 'src/api/models/artist.model';
import ArtistHoverOverlay from 'src/components/EventImageComponents/HoverOverlays/ArtistImageHover';

interface IProps {
  artist: ArtistModel;
  ref?: React.RefObject<HTMLDivElement> | null;
}

const Artist: React.FC<IProps> = ({ artist, ref = null }) => {
  const [hovered, setHovered] = React.useState<boolean>(false);

  const onAboutClick = () => {};

  return (
    <div className={styles.root} ref={ref}>
      <Text color="black" textAlign="left" textTransform="uppercase" fontSize="3rem" fontFamily="League Gothic">
        Artist
      </Text>
      <div className={styles.content} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <img src={artist.imageUrl} alt="An artist image"></img>
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

export default Artist;
