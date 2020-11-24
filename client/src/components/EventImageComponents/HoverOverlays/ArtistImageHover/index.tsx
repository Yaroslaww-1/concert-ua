import React from 'react';

import { ArtistShortModel } from 'src/api/models/artist-short.model';

import styles from './styles.module.scss';
import TransparentButton from 'src/components/Buttons/TransparentButton';
import Text from 'src/components/Text';
import { getImageColor, RgbColor } from 'src/common/images/image.helper';
import { useHover } from 'src/common/hooks/use-hover';

interface IProps {
  artist: ArtistShortModel;
  onAboutClick: () => void;
}

const ArtistHoverOverlay: React.FC<IProps> = ({ artist: { imageUrl, name }, onAboutClick }) => {
  const [backgroundColor, setBackgroundColor] = React.useState<RgbColor>([0, 0, 0]);
  React.useEffect(() => {
    getImageColor(imageUrl).then((color) => setBackgroundColor(color));
  }, []);
  const { hoverStyle, ...hoverProps } = useHover({ backgroundColor: `rgba(${[...backgroundColor]}, 0.9)` });
  return (
    <div className={styles.root} style={hoverStyle} {...hoverProps}>
      <div className={styles.innerRoot}>
        <div className={styles.title}>
          <Text fontSize="5.625rem" textTransform={'uppercase'} fontFamily="League Gothic">
            {name}
          </Text>
        </div>
        <div className={styles.aboutButton}>
          <TransparentButton text={'About artist'} onClick={onAboutClick} />
        </div>
      </div>
    </div>
  );
};

export default ArtistHoverOverlay;
