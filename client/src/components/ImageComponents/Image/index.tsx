import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  withHover?: boolean;
  withTextOnHover?: boolean;
  withText?: boolean;
  title?: string;
  date?: string;
  place?: string;
  imageSrc: string;
  imageAltText?: string;
  imageWrapperClassName?: string;
  imageClassName?: string;
  textClassName?: {
    root?: string;
    date?: string;
    title?: string;
    place?: string;
  };
}

const Image: React.FC<IProps> = ({
  withHover = false,
  withTextOnHover = false,
  withText = true,
  title = '',
  date = '',
  place = '',
  imageSrc,
  imageAltText = 'An image',
  imageWrapperClassName = '',
  imageClassName = '',
  textClassName = {
    root: '',
    date: '',
    title: '',
    place: '',
  },
}) => {
  return (
    <div className={`${styles.wrapper} ${imageWrapperClassName}`}>
      <img src={imageSrc} alt={imageAltText} className={imageClassName} />
      {withText && (
        <div className={`${styles.text} ${textClassName.root}`}>
          {date !== '' && <div className={`${styles.date} ${textClassName.date}`}>{date}</div>}
          {title !== '' && <div className={`${styles.title} ${textClassName.title}`}>{title}</div>}
          {place !== '' && <div className={`${styles.place} ${textClassName.place}`}>{place}</div>}
        </div>
      )}
      {withHover && (
        <div className={styles.hoverOverlay}>
          {withTextOnHover && (
            <div className={`${styles.text} ${textClassName.root}`}>
              {date !== '' && <div className={`${styles.date} ${textClassName.date}`}>{date}</div>}
              {title !== '' && <div className={`${styles.title} ${textClassName.title}`}>{title}</div>}
              {place !== '' && <div className={`${styles.place} ${textClassName.place}`}>{place}</div>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Image;
