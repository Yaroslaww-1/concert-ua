import React from 'react';

import styles from './styles.module.scss';
import Image, { IImageProps } from 'src/components/EventImageComponents/Images/Image';

const SquareImage: React.FC<IImageProps> = (props) => {
  return (
    <Image
      {...props}
      classes={{
        root: `${styles.wrapper} ${props.classes?.root}`,
        image: `${styles.image} ${props.classes?.image}`,
      }}
    />
  );
};

export default SquareImage;
