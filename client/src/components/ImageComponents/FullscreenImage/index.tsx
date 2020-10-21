import React from 'react';

import styles from './styles.module.scss';
import Image from 'src/components/ImageComponents/Image';

interface IProps {
  withText?: boolean;
  title?: string;
  date?: string;
  place?: string;
  imageSrc: string;
  imageAltText?: string;
}

const FullscreenImage: React.FC<IProps> = (props) => {
  return <Image {...props} imageWrapperClassName={styles.wrapper} imageClassName={styles.image} />;
};

export default FullscreenImage;
