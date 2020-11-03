import React from 'react';

import styles from './styles.module.scss';
import Image from 'src/components/ImageComponents/Images/Image';

interface IProps {
  imageSrc: string;
  imageAltText?: string;
}

const FullscreenImage: React.FC<IProps> = (props) => {
  return <Image {...props} classes={{ root: styles.wrapper, image: styles.image }} />;
};

export default FullscreenImage;
