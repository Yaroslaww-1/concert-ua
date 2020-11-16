import React from 'react';

import styles from './styles.module.scss';

export interface IImageProps {
  classes?: {
    root?: string;
    image?: string;
  };
  imageSrc: string;
  imageAltText?: string;
  hoverElement?: JSX.Element;
  frontElement?: JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Image: React.FC<IImageProps> = ({
  imageSrc,
  imageAltText = 'An image',
  classes = {
    root: '',
    image: '',
  },
  hoverElement = null,
  frontElement = null,
  onClick = (event: React.MouseEvent<HTMLDivElement>) => {},
}) => {
  const [hovered, setHovered] = React.useState<boolean>(false);
  return (
    <div
      className={`${styles.wrapper} ${classes.root}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <img src={imageSrc} alt={imageAltText} className={classes.image} />
      {frontElement && frontElement}
      {hoverElement && hovered && hoverElement}
    </div>
  );
};

export default Image;
