import React from 'react';

import styles from './styles.module.scss';
import Image from 'src/components/EventImageComponents/Images/Image';

interface IProps {
  imageSrc: string;
  imageAltText?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const FullscreenImage: React.FC<IProps> = (props) => {
  return <Image {...props} classes={{ root: styles.wrapper, image: styles.image }} onClick={props.onClick} />;
};

export default FullscreenImage;
