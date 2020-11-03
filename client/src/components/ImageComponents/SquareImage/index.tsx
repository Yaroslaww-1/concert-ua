import React from 'react';

import styles from './styles.module.scss';
import Image from 'src/components/ImageComponents/Image';

interface IProps {
  withText?: boolean;
  withTextOnHover?: boolean;
  withHover?: boolean;
  title?: string;
  date?: string;
  place?: string;
  imageSrc: string;
  imageAltText?: string;
  imageWrapperClassName?: string;
  imageClassName?: string;
}

const SquareImage: React.FC<IProps> = (props) => {
  return (
    <Image
      {...props}
      imageWrapperClassName={`${styles.wrapper} ${props.imageWrapperClassName}`}
      imageClassName={`${styles.image} ${props.imageClassName}`}
      textClassName={{ root: styles.textRoot }}
    />
  );
};

export default SquareImage;
