import React from 'react';

import styles from './styles.module.scss';
import TransparentButton from 'src/components/Buttons/TransparentButton';
import LikeIcon from 'src/components/Icons/LikeIcon';
import Text from 'src/components/Text';
import { getImageColor, RgbColor } from 'src/common/images/image.helper';
import { useHover } from 'src/common/hooks/use-hover';

interface IProps {
  title: string;
  imageSrc: string;
  onLike: () => void;
  bottomButtonText: string;
  onBottomButtonClick: () => void;
  classes?: {
    titleTextRoot?: string;
  };
}

const SquareImageHoverOverlay: React.FC<IProps> = ({
  title,
  onLike,
  bottomButtonText,
  onBottomButtonClick,
  imageSrc,
  classes = {},
}) => {
  const [backgroundColor, setBackgroundColor] = React.useState<RgbColor>([0, 0, 0]);
  React.useEffect(() => {
    getImageColor(imageSrc).then((color) => setBackgroundColor(color));
  }, []);
  const { hoverStyle, ...hoverProps } = useHover({ backgroundColor: `rgba(${[...backgroundColor]}, 0.9)` });
  return (
    <div className={styles.root} style={hoverStyle} {...hoverProps}>
      <div className={styles.innerRoot}>
        <div className={styles.likeIcon}>
          <LikeIcon onClick={onLike} />
        </div>
        <div className={styles.title}>
          <Text
            fontSize={'5vw'}
            textTransform={'uppercase'}
            lineHeight={1}
            fontFamily="League Gothic"
            classes={{ root: classes.titleTextRoot || '' }}
          >
            {title}
          </Text>
        </div>
        <div className={styles.bottomButton}>
          <TransparentButton text={bottomButtonText} onClick={onBottomButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default SquareImageHoverOverlay;
